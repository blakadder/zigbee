install:
	bundle install

dev:
	bundle exec jekyll serve --incremental --host 0.0.0.0

publish:
	gem push $(shell gem build millidocs.gemspec | grep 'millidocs-' | sed 's/File: / /g')
