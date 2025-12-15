# Dramada website

Website is at [https://aderfish.github.io/dramada_website](https://aderfish.github.io/dramada_website/).

## Local setup
Here are the steps to run the website locally for development.
Install ruby

`sudo apt install ruby-full gem`

Install bundle and jekyll from gem

`sudo gem install bundle jekyll`

Setup path for libraries for this project

`bundle config set path vendor/bundle`

Install dependencies

`bundle install`

Compile and host site locally

`bundle exec jekyll serve`