
.PHONY: help
help:
	@echo "make [TARGETS...]"
	@echo
	@awk ' \
		BEGIN {FS = ":.*?## "} \
		/^### / {printf "\n\033[1m%s\033[0m\n", substr($$0, 5); next} \
		/^[a-zA-Z_\/-]+:.*?## / {printf "  \033[36m%-30s\033[0m %s\n", $$1, $$2} \
	' $(MAKEFILE_LIST)

.PHONY: test
.ONESHELL:
test: ## test pulling the readmes from the other projects
	cd scripts
	python3 test_pull_readmes.py
	python3 test_pull_image_descriptions.py

.PHONY: generate
generate: pull-readmes pull-image-builder pull-koji-image-builder pull-osbuild-modules pull-image-descriptions ## generate all external content (classic + bootc image descriptions, support matrix; PULL_IMAGE_DESCRIPTIONS_JOBS=N)


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

### Internal targets

.PHONY: pull-readmes
pull-readmes: ## pull the readmes from other projects given in `readme-list`
	python3 scripts/pull_readmes.py readme-list

.PHONY: pull-image-builder
pull-image-builder: ## pull the image-builder-cli documentation
	python3 scripts/pull_image-builder.py

.PHONY: pull-koji-image-builder
pull-koji-image-builder: ## pull the koji-image-builder documentation
	python3 scripts/pull_koji-image-builder.py

.PHONY: pull-osbuild-modules
pull-osbuild-modules: ## pull the documentation of the osbuild modules
	python3 scripts/pull_osbuild_modules.py

# Pull image descriptions for subset of supported distributions
# Documentation is generated in docs/user-guide/09-image-descriptions/
# This generates documentation for:
# - Bootc (from bootc-generic/imagetypes.yaml; see README)
# - Fedora 42+
# - Latest RHEL-10 GA version - 10.2
# - Latest RHEL-9 GA version - 9.8
# - Latest RHEL-8 GA version - 8.10
# - All CentOS Stream versions
# - Selected AlmaLinux / Rocky versions
# Optional: BOOTC_IMAGETYPES=/path/to/imagetypes.yaml
.PHONY: pull-image-descriptions
pull-image-descriptions: ## pull image descriptions incl. bootc + blueprint-option-support.json (PULL_IMAGE_DESCRIPTIONS_JOBS=N; optional BOOTC_IMAGETYPES=)
	python3 scripts/pull_image_descriptions.py \
		$(if $(BOOTC_IMAGETYPES),--bootc-imagetypes "$(BOOTC_IMAGETYPES)",) \
		--distro-filter "fedora-4[2-4]" \
		--distro-filter "rhel-(10.2|9.8|8.10)" \
		--distro-filter "rocky-(10.1|9.7|8.10)" \
		--distro-filter "centos-*" \
		--distro-filter "almalinux-(10.1|9.7|8.10)" \
		--distro-filter "almalinux_kitten-*"

.PHONY: pull-bootc-image-descriptions
pull-bootc-image-descriptions: ## regenerate bootc 09 pages only (needs BOOTC_IMAGETYPES or fetches from GitHub)
	python3 scripts/pull_image_descriptions.py --bootc-only \
		$(if $(BOOTC_IMAGETYPES),--bootc-imagetypes "$(BOOTC_IMAGETYPES)",)
