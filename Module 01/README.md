# Module 01 - Dependency Injection in Depth

### Projects:
|     |     |
| --- | --- |
| [fun-with-di](fun-with-di/) | Introduction to angular Dependency Injection |


### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection Token** - A consumer that asks for a dependency (service) in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of a Module, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw how to use the following explicit providers:
    - **Class** provider
    - **Existing** provider
    - **Value** provider
    - **Factory** provider
* Finally, we saw how to define a service as Injectable so it can also consume dependencies
  * We saw the "tree shakable" syntax that uses the `@Injectable` decorator to set the root provider

