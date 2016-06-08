"use strict";angular.module("waitanimateApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngclipboard"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("waitanimateApp").config(["$compileProvider",function(a){a.debugInfoEnabled(!1)}]),angular.module("waitanimateApp").controller("MainCtrl",["$scope","$http","$filter","$timeout","$location","$anchorScroll",function(a,b,c,d,e,f){a.scrollTo=function(a){e.hash(a),f.yOffset=100,f()},a.egAnimations={wrench:{keyframes:[["0","transform:rotate(-12deg)"],["10.66667","transform:rotate(12deg)"],["13.33333","transform:rotate(24deg)"],["24","transform:rotate(-24deg)"],["26.66667","transform:rotate(-24deg)"],["37.33333","transform:rotate(24deg)"],["40","transform:rotate(24deg)"],["50.66667","transform:rotate(-24deg)"],["53.33333","transform:rotate(-24deg)"],["64","transform:rotate(24deg)"],["66.66667","transform:rotate(24deg)"],["77.33333","transform:rotate(-24deg)"],["80","transform:rotate(-24deg)"],["90.66667","transform:rotate(24deg)"],["100","transform:rotate(0deg)"]],duration:1.875,animationTimingFunction:"ease",transform:"\n  transform-origin: 90% 35%;",icon:"wrench"},shake:{keyframes:[["0","transform:rotate(-12deg)"],["10.66667","transform:rotate(12deg)"],["13.33333","transform:rotate(24deg)"],["24","transform:rotate(-24deg)"],["26.66667","transform:rotate(-24deg)"],["37.33333","transform:rotate(24deg)"],["40","transform:rotate(24deg)"],["50.66667","transform:rotate(-24deg)"],["53.33333","transform:rotate(-24deg)"],["64","transform:rotate(24deg)"],["66.66667","transform:rotate(24deg)"],["77.33333","transform:rotate(-24deg)"],["80","transform:rotate(-24deg)"],["90.66667","transform:rotate(24deg)"],["100","transform:rotate(0deg)"]],duration:1.875,animationTimingFunction:"ease",icon:"envelope"},ring:{keyframes:[["0","transform: rotate(-15deg)"],["10","transform: rotate(15deg)"],["20","transform: rotate(-18deg)"],["30","transform: rotate(18deg)"],["40","transform: rotate(-22deg)"],["50","transform: rotate(22deg)"],["60","transform: rotate(-18deg)"],["70","transform: rotate(18deg)"],["80","transform: rotate(-12deg)"],["90","transform: rotate(12deg)"],["100","transform: rotate(0deg)"]],duration:.4,animationTimingFunction:"ease",transform:"\n  transform-origin: 50% 0px;",icon:"bell"},vertical:{keyframes:[["0","transform:translate(0,-3px)"],["18.18182","transform:translate(0,3px)"],["36.36364","transform:translate(0,-3px)"],["54.54545","transform:translate(0,3px)"],["72.72727","transform:translate(0,-3px)"],["90.90909","transform:translate(0,3px)"],["100","transform:translate(0,0)"]],duration:.44,animationTimingFunction:"ease",icon:"arrows-v"},horizontal:{keyframes:[["0","transform:translate(0,0)"],["16.66667","transform:translate(5px,0)"],["33.33333","transform:translate(0,0)"],["50.00000","transform:translate(5px,0)"],["66.66667","transform:translate(0,0)"],["83.33333","transform:translate(5px,0)"],["100","transform:translate(0,0)"]],duration:.72,animationTimingFunction:"ease",icon:"arrows-h"},"double-flash":{keyframes:[["0","opacity:1"],["25","opacity:0"],["50","opacity:1"],["75","opacity:0"],["100","opacity:1"]],duration:2,animationTimingFunction:"ease",icon:"lightbulb-o"},bounce:{keyframes:[["0","transform:translateY(0)"],["12.5","transform:translateY(0)"],["25","transform:translateY(0)"],["50","transform:translateY(-15px)"],["62.5","transform:translateY(0)"],["75","transform:translateY(-15px)"],["100","transform:translateY(0)"]],duration:1.6,animationTimingFunction:"ease",icon:"futbol-o"},spin:{keyframes:[["0","transform:rotate(0deg)"],["100","transform:rotate(359deg)"]],duration:1.5,animationTimingFunction:"linear",icon:"refresh"},"float":{keyframes:[["0","transform: translateY(0)"],["50","transform: translateY(-6px)"],["100","transform: translateY(0)"]],duration:2,animationTimingFunction:"linear",icon:"cloud"},pulse:{keyframes:[["0","transform: scale(1.1)"],["50","transform: scale(0.8)"],["100","transform: scale(1.1)"]],duration:2,animationTimingFunction:"linear",icon:"heart"},tada:{keyframes:[["0","transform: scale(1)"],["12.5","transform:scale(.9) rotate(-8deg)"],["25","transform:scale(.9) rotate(-8deg)"],["37.5","transform:scale(1.3) rotate(8deg)"],["50","transform:scale(1.3) rotate(-8deg)"],["62.5","transform:scale(1.3) rotate(8deg)"],["75","transform:scale(1.3) rotate(-8deg)"],["87.5","transform:scale(1.3) rotate(8deg)"],["100","transform:scale(1) rotate(0)"]],duration:1.6,animationTimingFunction:"linear",icon:"trophy"},passing:{keyframes:[["0","transform:translateX(-50%); opacity:0"],["50","transform:translateX(0%); opacity:1"],["100","transform:translateX(50%); opacity:0"]],duration:2,animationTimingFunction:"linear",icon:"fighter-jet"},"passing-reverse":{keyframes:[["0","transform:translateX(50%); opacity:0"],["50","transform:translateX(0%); opacity:1"],["100","transform:translateX(-50%); opacity:0"]],duration:2,animationTimingFunction:"linear",icon:"fighter-jet"},burst:{keyframes:[["0","opacity:1"],["99.999","transform:scale(1.8); opacity:0"],["100","transform:scale(1); opacity:1"]],duration:2,animationTimingFunction:"linear",icon:"star"}},a.alert={show:!1},a.egConfig={waitnum:2,animation:"wrench"};var g=function(a,b,d,e){for(var f,g,h="@keyframes "+d+" {\n",i=0;i<a.length;i++)f=a[i][0],g=a[i][1],h+="  "+1*c("number")(f*b/(b+e),5)+"% { "+g+" }\n",i+1===a.length&&(0!==e||0===e&&"100"!==f)&&(h+="  100% { "+g+" }\n");return h+="}"};a.egKeyframes=function(){a.string=g(a.egAnimations[a.egConfig.animation].keyframes,a.egAnimations[a.egConfig.animation].duration,a.egConfig.animation,a.egConfig.waitnum)},a.egKeyframes(),a.customConfig={keyframes:"0% { transform: scale(1) }\n12.5% { transform:scale(.9) rotate(-8deg) }\n25% { transform:scale(.9) rotate(-8deg) }\n37.5% { transform:scale(1.3) rotate(8deg) }\n50% { transform:scale(1.3) rotate(-8deg) }\n62.5% { transform:scale(1.3) rotate(8deg) }\n75% { transform:scale(1.3) rotate(-8deg) }\n87.5% { transform:scale(1.3) rotate(8deg) }\n100% { transform:scale(1) rotate(0) }",waitnum:1,name:"animationName",duration:2,timingFunction:"linear",transformOriginX:50,transformOriginY:50};var h,i,j,k;a.$watchGroup(["customConfig.keyframes","customConfig.waitnum","customConfig.name","customConfig.duration"],function(){h="",k=[],angular.element(a.customConfig.keyframes.split("}")).each(function(a,b){b&&(b=b.trim()+"}",j=b.match(/{([^}]+)}/)[1],i=b.split("%")[0],k.push([i,j]))}),a.customoutput=g(k,a.customConfig.duration,a.customConfig.name,a.customConfig.waitnum)}),a.copySuccess=function(b){a.alert.text="CSS copied to clipboard...",a.alert.type="success",a.alert.show=!0,d(function(){a.alert.show=!1},3e3),$(".btn").blur(),b.clearSelection()},a.copyError=function(){a.alert.text="ERROR! Unable to copy CSS to clipboard",a.alert.type="danger",a.alert.show=!0,d(function(){a.alert.show=!1},3e3)}}]).directive("quickSelect",["$timeout",function(a){return{restrict:"A",link:function(b,c,d){a(function(){$(c).quickselect(b.$eval(d.quickSelect))})}}}]),angular.module("waitanimateApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="alert alert-{{alert.type}} copyAlert fade in text-center" role="alert" ng-show="alert.show"> <strong>{{alert.text}}</strong> </div> <div class="topAlert alert alert-info text-center">SCSS Mixin <a ng-click="scrollTo(\'mixinTitle\')">now available</a></div> <!-- <div class="col-xs-12 col-sm-12"> --> <h2 class="title-font text-center"> What is this? </h2> <p> CSS doesn\'t provide an easy way to pause an animation before it loops around again. Yes, there\'s <code>animation-delay</code> but this simply denotes a delay at the very start of the animation, i.e on load. <span class="title-font">WAIT! Animate</span> provides an easy way to calculate the keyframe percentages so that you can insert a delay between each animation iteration. Below are some example animations to demonstrate how this is achieved. Below that is a config tool to add waits to your own animations without the need for JavaScript. </p> <!-- </div> --> <hr> <h2 class="title-font text-center">Example animations</h2> <p class="text-center">Based on the great <a href="http://l-lin.github.io/font-awesome-animation/">Font Awesome Animation</a> library by <a href="https://github.com/l-lin">Louis LIN</a></p> <div class="row"> <div class="col-xs-12 col-sm-6 text-center"> <div class="row"> <div class="col-xs-5"> <h4 class="section-font"> Preview </h4> <p> <i class="fa fa-{{egAnimations[egConfig.animation].icon}} {{egAnimations[egConfig.animation].addedClass}} super-large-icon {{egConfig.animation}} wait{{egConfig.waitnum}} animated"></i> </p> </div> <div class="col-xs-7"> <h4 class="section-font"> Wait time </h4> <p> <div class="input-group"> <span class="input-group-addon pointer" ng-click="egConfig.waitnum = egConfig.waitnum - 1; egKeyframes();"><i class="fa fa-minus"></i></span> <input ng-change="egKeyframes()" type="number" class="form-control input-no-spinner text-center input-lg" ng-model="egConfig.waitnum"> <span class="input-group-addon pointer" ng-click="egConfig.waitnum = egConfig.waitnum + 1; egKeyframes();"><i class="fa fa-plus"></i></span> </div> </p> <p class="text-right m-t--10 help-block"><small>seconds</small></p> </div> </div> <h4 class="section-font text-center"> Animation </h4> <p> <select quick-select="{\n        activeButtonClass: \'active\',\n        buttonClass: \'btn btn-default btn-lg\',\n        breakOutAll: true,\n        wrapperClass: \'flexbox\'\n      }" class="" name="" ng-model="egConfig.animation" ng-change="egKeyframes()"> <option ng-repeat="(n, a) in egAnimations">{{n}}</option> </select> </p> </div> <div class="col-xs-12 col-sm-6"> <h4 class="section-font text-center"> CSS </h4> <style id="egCssOutput" class="css-output">.{{egConfig.animation}} {\n  animation: {{egConfig.animation}} {{(egAnimations[egConfig.animation].duration + egConfig.waitnum  | number: 5) * 1}}s {{egAnimations[egConfig.animation].animationTimingFunction}} infinite;{{egAnimations[egConfig.animation].transform}}\n}\n{{string}}</style> <p class="text-right"> <button class="btn" ngclipboard data-clipboard-target="#egCssOutput" ngclipboard-success="copySuccess(e);" ngclipboard-error="copyError(e);"> <i class="fa fa-clipboard"></i> Copy to clipboard </button> </p> </div> </div> <hr> <h2 class="title-font text-center">Custom animation</h2> <p class="text-center">Calculate a wait time for your own keyframe animation</p> <div class="row"> <div class="col-xs-12 col-sm-6 text-center"> <div class="row"> <div class="col-xs-5"> <h4 class="section-font"> Preview </h4> <p> <i class="fa fa-cube super-large-icon {{customConfig.name}} wait{{customConfig.waitnum}} animated"></i> </p> </div> <div class="col-xs-7"> <h4 class="section-font"> Wait time </h4> <p> <div class="input-group"> <span class="input-group-addon pointer" ng-click="customConfig.waitnum = customConfig.waitnum - 1;"><i class="fa fa-minus"></i></span> <input type="number" class="form-control input-no-spinner text-center input-lg" ng-model="customConfig.waitnum"> <span class="input-group-addon pointer" ng-click="customConfig.waitnum = customConfig.waitnum + 1;"><i class="fa fa-plus"></i></span> </div> </p> <p class="text-right m-t--10 help-block"><small>seconds</small></p> </div> </div> <h4 class="section-font text-center">Settings</h4> <div class="form-horizontal"> <div class="form-group"> <label for="animationName" class="col-sm-3 control-label">Name</label> <div class="col-sm-9"> <input type="text" class="form-control" id="animationName" placeholder="Name" ng-model="customConfig.name"> </div> </div> <div class="form-group"> <label for="animationDuration" class="col-sm-3 control-label">Animation Duration</label> <div class="col-sm-9"> <div class="input-group"> <span class="input-group-addon pointer" ng-click="customConfig.duration = customConfig.duration - 1;"><i class="fa fa-minus"></i></span> <input ng-model="customConfig.duration" type="number" min="0" class="form-control input-no-spinner text-center input-lg"> <span class="input-group-addon pointer" ng-click="customConfig.duration = customConfig.duration + 1;"><i class="fa fa-plus"></i></span> </div> </div> </div> <div class="form-group"> <label for="animationTimingFunction" class="col-sm-3 control-label">Timing Function</label> <div class="col-sm-9"> <select quick-select="{\n            activeButtonClass: \'active\',\n            breakOutAll: true,\n            buttonClass: \'btn btn-default\',\n            selectDefaultText: \'\',\n            wrapperClass: \'flexbox\'\n          }" id="animationTimingFunction" class="" ng-model="customConfig.timingFunction"> <option value="linear">linear</option> <option value="ease">ease</option> <option value="ease-in">ease-in</option> <option value="ease-out">ease-out</option> <option value="ease-in-out">ease-in-out</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label">Transform Origin</label> <div class="col-sm-9"> <div class="row"> <div class="col-xs-6"> X <div class="input-group"> <span class="input-group-addon pointer" ng-click="customConfig.transformOriginX = customConfig.transformOriginX - 1;"><i class="fa fa-minus"></i></span> <input type="number" class="form-control input-no-spinner text-center" ng-model="customConfig.transformOriginX"> <span class="input-group-addon pointer" ng-click="customConfig.transformOriginX = customConfig.transformOriginX + 1;"><i class="fa fa-plus"></i></span> </div> </div> <div class="col-xs-6"> Y <div class="input-group"> <span class="input-group-addon pointer" ng-click="customConfig.transformOriginY = customConfig.transformOriginY - 1;"><i class="fa fa-minus"></i></span> <input type="number" class="form-control input-no-spinner text-center" ng-model="customConfig.transformOriginY"> <span class="input-group-addon pointer" ng-click="customConfig.transformOriginY = customConfig.transformOriginY + 1;"><i class="fa fa-plus"></i></span> </div> </div> </div> </div> </div> <div class="form-group"> <label for="animationKeyframes" class="col-sm-12 text-left">Keyframes</label> <div class="col-sm-12"> <textarea id="animationKeyframes" rows="10" placeholder="0% { example:animate(5) }\n50% { example:animate(10) }\n100% { example:animate(5) }" class="form-control" ng-model="customConfig.keyframes"></textarea> <p class="help-block text-justify"><small>Use percentages. Calculations cannot be performed on <em>from</em> and <em>to</em>. Also, it is recommended to start your animation at 0% and end it at 100%, therefore the calculated wait time will be precise.</small></p> </div> </div> </div> </div> <div class="col-xs-12 col-sm-6"> <h4 class="section-font text-center">CSS</h4> <style id="customCssOutput" class="css-output">.{{customConfig.name}} {\n  animation: {{customConfig.name}} {{(customConfig.duration + customConfig.waitnum  | number: 5) * 1}}s {{customConfig.timingFunction}} infinite;\n  transform-origin: {{customConfig.transformOriginX}}% {{customConfig.transformOriginY}}%\n}\n{{customoutput}}</style> <p class="text-right"> <button class="btn" ngclipboard data-clipboard-target="#customCssOutput" ngclipboard-success="copySuccess(e);" ngclipboard-error="copyError(e);"> <i class="fa fa-clipboard"></i> Copy to clipboard </button> </p> </div> </div> <hr> <h2 class="title-font text-center">FAQ</h2> <h3 class="title-font text-center">Why aren\'t the examples registered with Bower?</h3> <p> The Font Awesome Animation library is... well... awesome. Simply install with Bower then add the classes to your icons. Therefore, it might seem natural for <span class="title-font">WAIT! Animate</span> to come as a library too, allowing you to add a <em>wait</em> class to instantly achieve the desired pause duration. However, <span class="title-font">WAIT! Animate</span> re-calculates the keyframe percentages based on the desired wait time and duration of the animation. If we wanted to cover 0 to 30 seconds wait time for every animation, it would mean compiling 14 animations\' keyframes for a 0 second wait, 1 second wait, 2 second wait.... and 30 second wait. Err... I make that 434 classes with 434 keyframes rules. That\'s not great if you only want to use the <em>Tada</em> animation with a 7 second wait: a lot of unused CSS being loaded by the browser. And what about if you wanted a 33 second wait? Besides, making the custom tool means you can add wait times to <em>any</em> animation. </p> <h3 class="title-font text-center" id="mixinTitle">Ok, so I understand that you don\'t want to release a bloated library, but why not just release a SASS mixin?</h3> <p> Sure... </p> <pre id="mixin">@mixin waitAnimate($options: ()) {\n\n  $options: map-merge((\n    animationName: waitAnimate,\n    duration: 1,\n    waitTime: 0,\n    timingFunction: linear,\n    iterationCount: infinite\n  ), $options);\n\n  $name: map-get($options, animationName);\n  $kf: map-get($options, keyframes);\n  $kfLength: length($kf);\n  $duration: map-get($options, duration);\n  $waitTime: map-get($options, waitTime);\n  $timingFunction: map-get($options, timingFunction);\n  $iterationCount: map-get($options, iterationCount);\n  $counter: 1; // index of \'each\'\n\n  @keyframes #{$name} {\n    @each $frame, $prop in $kf {\n      #{$frame * $duration / ($duration + $waitTime)}% {\n        @each $k, $v in $prop {\n          #{$k}: #{$v}\n        }\n      }\n      // if last in loop and waitTime is not 0, add the last frame as 100% (this is what creates the pause)\n      @if $counter == $kfLength and $waitTime > 0 {\n        100% {\n          @each $k, $v in $prop {\n            #{$k}: #{$v}\n          }\n        }\n      }\n      $counter: $counter+1;\n    }\n  }\n\n  .#{$name} {\n    animation: #{$name} #{$duration}s #{$timingFunction} #{$iterationCount};\n  }\n\n}</pre> <p class="text-right"> <button class="btn" ngclipboard data-clipboard-target="#mixin" ngclipboard-success="copySuccess(e);" ngclipboard-error="copyError(e);"> <i class="fa fa-clipboard"></i> Copy to clipboard </button> </p> <div class="row"> <div class="col-md-6"> <p> Include: </p> <pre id="mixinInclude">@include waitAnimate(\n  (\n    animationName: animName,\n    keyframes: (\n      0: (\n        transform: scale(1),\n        background-color: blue\n      ),\n      50: (\n        transform: scale(2),\n        background-color: green\n      ),\n      100: (\n        transform: scale(3),\n        background-color: red\n      )\n    ),\n    duration: 2,\n    waitTime: 1,\n    timingFunction: ease,\n    iterationCount: infinite\n  )\n);</pre> <p class="text-right"> <button class="btn" ngclipboard data-clipboard-target="#mixinInclude" ngclipboard-success="copySuccess(e);" ngclipboard-error="copyError(e);"> <i class="fa fa-clipboard"></i> Copy to clipboard </button> </p> </div> <div class="col-md-6"> <p> Output: </p> <pre>@keyframes animName {\n  0% {\n    transform: scale(1);\n    background-color: blue;\n  }\n  33.33333333% {\n    transform: scale(2);\n    background-color: green;\n  }\n  66.66666667% {\n    transform: scale(3);\n    background-color: red;\n  }\n  100% {\n    transform: scale(3);\n    background-color: red;\n  }\n}\n.animName {\n  animation: animName 2s ease infinite;\n}</pre> </div> </div> <p> You\'ll notice that you need to change your keyframes rule to a SASS map object. I was unable to find a solution that could manipulate a standard keyframes rule. If you know of a way to do this, please let me know. </p> <p> <code>@include waitAnimate((options));</code> </p> <div class="table-responsive"> <table class="table"> <thead> <tr> <td>Option</td> <td>Description</td> <td>Type</td> <td>Required?</td> <td>Default</td> </tr> </thead> <tbody> <tr> <td>animationName</td> <td>The class name of your animation.</td> <td>String</td> <td>No</td> <td>waitAnimate</td> </tr> <tr> <td>keyframes</td> <td>The 0% to 100% animation rule.</td> <td>SASS map object</td> <td>Yes</td> <td></td> </tr> <tr> <td>duration</td> <td>The length of the animation in seconds (wait time will be added to this).</td> <td>Number</td> <td>No</td> <td>1</td> </tr> <tr> <td>waitTime</td> <td>The amount of pause time in seconds at the end of the animation.</td> <td>Number</td> <td>No</td> <td>0</td> </tr> <tr> <td>timingFunction</td> <td>The speed curve of the animation.</td> <td>String</td> <td>No</td> <td>linear</td> </tr> <tr> <td>iterationCount</td> <td>The number of times the animation should be played.</td> <td>String</td> <td>No</td> <td>infinite</td> </tr> </tbody> </table> </div> <h3 class="title-font text-center">Show me sources? Code, where art thou? I want to help... maybe.</h3> <p> The code and this webpage is hosted by GitHub: <a href="https://github.com/eggboxio/waitanimate">github.com/eggboxio/waitanimate</a>. Feel free to log feature requests or any issues you find. </p> <hr>')}]);