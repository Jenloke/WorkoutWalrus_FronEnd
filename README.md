# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

TO DO AppDev - WorkOut Walrus
BackEnd
	NaN

FrontEnd
	Navigation Bar
		Functional
		
	Login 
		Authenticate User Login Details to MongoRealm
		Layout + CSS + Responsive
	
	SignUp
		Layout + CSS + Responsive
	
	Home
		Should not load when not user is logged in
		Get User Information from MongoRealm
		Layout + CSS + Responsive
		Generate Last 3 Completed Exercise
	
	To Do Exercise.vue .js 
		Get To
	
	Exercise
		Should not load when not user is logged in
		Generate Exercise List with Description
		Throw Data from Exercise to Tracker
		Layout + CSS + Responsive
		
		Edit User
		
	Tracker
		Should not load when not user is logged in
		Get Data from Exercise to Tracker
		Layout + CSS + Responsive
		
		Generate Exercise CheckBox  with name and calorie burned 
		
		
		
Go to Exercise Page
Select Options && Time in minutes
Add Exercise to TODOList 

Go to Tracker Page
Get TODOList Data
Load TODOList Data
Cross Off TODO Exercise
Add Crossed off TODO to Calorie Burned

Exercise Vue
{
	_id:
	name: 
	equipment:
	instructions:
	calorie_burned:
}

time minutes: int - minimum 1

Tracker Vue
{
	_id (exercise): 
	time: int 
	calorie_burned:
	total_calorie_burned: time * calorie_burned
	isCompleted: bool
}