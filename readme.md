# Laravel 4 + AngularJS + Grunt + Bower project seed

This seed is created to quickly scaffold a project with the following tools:

* Laravel 4 [http://laravel.com/](http://laravel.com/)
* Bootstrap v3 [http://getbootstrap.com](http://getbootstrap.com/)
* AngularJS [https://angularjs.org/](https://angularjs.org/)
  * Angular Bootstrap UI [http://angular-ui.github.io/bootstrap/](http://angular-ui.github.io/bootstrap/)
  * Angular UI Router [https://github.com/angular-ui/ui-router](https://github.com/angular-ui/ui-router)
  * Angular Resource
* Grunt task runner [http://gruntjs.com/](http://gruntjs.com/)
* Bower package manager [http://bower.io/](http://bower.io/)
 
It has the following Grunt Tasks configured out of the box: 

* Less: **less support**
* Concat: **code concat for production**
* Uglify: **code minification**
* Injector: **Automatic javascript and css files ref injected into layout**
* ngAnnotate: **for angular minification**
* Watch: **watchs for code changes and updates all the needed refs and adding [LiveReload](https://github.com/gruntjs/grunt-contrib-watch) support**

### To use

First clone this repo

```
git clone https://github.com/RJTM/laravel-angular-seed
```

Install Laravel 4 dependencies

```
composer install
```

Install NodeJS packages

```
npm install
```

Install bower packages

```
bower install
```

Run Grunt

```
grunt
```

Enjoy!
