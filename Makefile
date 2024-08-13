
.PHONY: help
help:
	@echo "make [TARGETS...]"
	@echo
	@echo 'Targets:'
	@awk 'match($$0, /^([a-zA-Z_\/-]+):.*?## (.*)$$/, m) {printf "  \033[36m%-30s\033[0m %s\n", m[1], m[2]}' $(MAKEFILE_LIST) | sort

.PHONY: test
.ONESHELL:
test: ## test pulling the readmes from the other projects
	pushd scripts
	python3 test_pull_readmes.py
	popd

.PHONY: pull-readmes
pull-readmes: ## pull the readmes from other projects given in `readme-list`
	python3 scripts/pull_readmes.py readme-list

.PHONY: pull-osbuild-modules
pull-osbuild-modules: ## pull the documentation of the osbuild modules 
	python3 scripts/pull_osbuild_modules.py

.PHONY: generate
generate: pull-readmes pull-osbuild-modules ## generate all external content

.PHONY: install-dependencies
install-dependencies: ## install all dependencies
	npm clean-install

.PHONY: build-website
build-website: ## build the website (dependencies need to be met)
	npm run build

.PHONY: build
build: install-dependencies build-website ## build the website in one go

.PHONY: run
run: ## run docusaurus locally for testing
	npm start

.PHONY: protect-readmes
protect-readmes: ## verify the READMEs don't get changed in a pull request (to be used in the workflow)
	python3 scripts/protect_readmes.py readme-list

