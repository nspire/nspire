[nspire](http://nspire.org)
======
[![Dependency Status](https://gemnasium.com/nspire/nspire.png)](https://gemnasium.com/nspire/nspire)

The website of Nspire Innovation Network.

# Getting Started
You need these installed locally to run this app:
- Ruby 2.0.0-p353
- Rails 4.0.1
- [Postgres 93](http://postgresapp.com)

  ### Install Dependent Gems
  ```
  bundle install
  ```

  ### Setup the database
  ```
  cp config/database.yml.example config/database.yml
  ```

  ### Setup your local database
  ```
  rake db:setup
  ```

  ### Start your local server
  ```
  rails server
  ```

More details and troubleshooting available at the [Heroku Dev Center](https://devcenter.heroku.com/articles/getting-started-with-rails4)

## Running Nspire.org locally (updated September 2015)

All development is on the `gh-pages` branch. After pulling the Nspire branch and setting up the above, in terminal you can run: 

```
$ git checkout gh-pages
> Branch gh-pages set up to track remote branch gh-pages from origin.
> Switched to a new branch 'gh-pages'
$ gem install jekyll
> Successfully installed jekyll-2.5.3
> 1 gem installed
$ bundle install
> Bundle complete! 1 Gemfile dependency, 24 gems now installed.
> Use `bundle show [gemname]` to see where a bundled gem is installed.
``` 

Commands are denoted by `$` and output denoted by ` > `. 

Once Jekyll is installed, you can run:
`$ jekyll serve `
to start Jekyll locally. 

You should see: 

```
Configuration file: /Users/anasant/Documents/repos/nspire/_config.yml
            Source: /Users/anasant/Documents/repos/nspire
       Destination: /Users/anasant/Documents/repos/nspire/_site
      Generating... done.
    Server address: http://0.0.0.0:4000
  Server running... press ctrl-c to stop.
```
Now you can go to `localhost:4000` (or `localhost:<server_address_#>`) in your browser and should be able to see the Nspire.org page. 

## More notes about general development of Nspire site with Jekyll

_site is essentially the build folder. Whenever you build the application the _site folder will be cleaned out and replaced with the newly built files. The _site folder is where the files are served from. You should be changing files in the _include folder, and then rebuild everytime you want to see the changes since the _site folder will be overwritten everytime you build. 

You can build the site by restarting the server or doing ```jekyll build --watch``` with the server running and this will watch for changes and build automatically.

More information can be found here: https://jekyllrb.com/docs/usage/
