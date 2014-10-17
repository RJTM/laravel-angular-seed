<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
	<meta charset="UTF-8">
	<title>New Site</title>
	<!-- injector:css -->
	<link rel="stylesheet" href="/css/frontend.css">
	<!-- endinjector -->
</head>
<body>
	<div ui-view></div>
	<!-- injector:js -->
	<script src="/assets/vendor/angular/angular.js"></script>
	<script src="/assets/vendor/angular-bootstrap/ui-bootstrap-tpls.js"></script>
	<script src="/assets/vendor/angular-resource/angular-resource.js"></script>
	<script src="/assets/vendor/angular-ui-router/release/angular-ui-router.js"></script>
	<script src="/assets/js/common/common.module.js"></script>
	<script src="/assets/js/app.module.js"></script>
	<script src="/assets/js/common/services/accessLevels.constant.js"></script>
	<script src="/assets/js/routes.js"></script>
	<!-- endinjector -->
</body>
</html>