
.PHONY: help
help:
	@echo "make [TARGETS...]"
	@echo
	@echo 'Targets:'
	@awk 'match($$0, /^([a-zA-Z_\/-]+):.*?## (.*)$$/, m) {printf "  \033[36m%-30s\033[0m %s\n", m[1], m[2]}' $(MAKEFILE_LIST) | sort

.PHONY: test
.ONESHELL:
test: ## test pulling the readmes from the other projects
	cd scripts
	python3 test_pull_readmes.py

.PHONY: pull-readmes
pull-readmes: ## pull the readmes from other projects given in `readme-list`
	python3 scripts/pull_readmes.py readme-list

.PHONY: pull-image-builder
pull-image-builder: ## pull the image-builder-cli documentation
	python3 scripts/pull_image-builder.py

.PHONY: pull-osbuild-modules
pull-osbuild-modules: ## pull the documentation of the osbuild modules 
	python3 scripts/pull_osbuild_modules.py

# Pull image descriptions for subset of supported distributions
# Documentation is generated in docs/user-guide/09-image-definitions/
# This generates documentation for:
# - Fedora 41+
# - Latest RHEL-10 GA version - 10.0
# - Latest RHEL-9 GA version - 9.6
# - Latest RHEL-8 GA version - 8.10
# - All CentOS Stream versions
# - All AlmaLinux versions
.PHONY: pull-image-descriptions
pull-image-descriptions:
	python3 scripts/pull_image_descriptions.py \
		--distro-filter "fedora-4[1-9]" \
		--distro-filter "rhel-10.0" \
		--distro-filter "rhel-9.6" \
		--distro-filter "rhel-8.10" \
		--distro-filter "centos-*" \
		--distro-filter "almalinux-*" \
		--distro-filter "almalinux_kitten-*"

.PHONY: generate
generate: pull-readmes pull-osbuild-modules pull-image-descriptions ## generate all external content

.PHONY: install-dependencies
install-dependencies: ## install all dependencies
	npm clean-install

.PHONY: build-website
build-website: ## build the website (dependencies need to be met)
	npm run build

.PHONY: build
build: install-dependencies build-website ## build the website in one go

.PHONY: run
run: ## run docusaurus locally with auto-updates from the code (redirects don't work here)
	npm start

.PHONY: serve
serve: build ## serve the pre-built docusaurus locally (redirects only work here, not with `make run`)
	npm run serve

.PHONY: protect-readmes
protect-readmes: ## verify the READMEs don't get changed in a pull request (to be used in the workflow)
	python3 scripts/protect_readmes.py readme-list

.PHONY: clean
clean: ## remove all build artifacts
	# see docusaurus.config.ts -> Config -> plugins -> dynamicIndexPagesPlugin
	rm -f  docs/developer-guide/02-projects/index.md docs/developer-guide/01-general/index.md
	rm -rf build

.PHONY: wipe
wipe: clean ## remove all build artifacts and all nodejs caches
	rm -r node_modules .docusaurus
