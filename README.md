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
