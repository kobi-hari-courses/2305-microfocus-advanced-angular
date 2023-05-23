# Module 01 - Dependency Injection in Depth

## Projects:
|     |     |
| --- | --- |
| [fun-with-di](fun-with-di/) | Introduction to angular Dependency Injection |
| [fun-with-form-controls](fun-with-form-controls/) | How to write your own custom form control |


## Introduction to Dependency Injection 
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

## Injection Token
* We understood that the type of the requested injection does not always accurately describe the intent of the required object. Sometime the type can be something like "string" or "number" and you need to further describe the requested item
* **Injection Tokens** Allow us to define something that needs to be injected, regardless of its type
  * We create an injection token by exporting a constant of type `InjectionToken<T>` where `T` is the data type.
  * We provide it by using the injection token in the `provide` property of the provider object.
  * We consume it using the `@Inject(token)` decorator
  * We can also mark it as optional using the `@Optional()` decorator

## Provider types
* We saw how to privde an exact value using the `useValue` provider.
* We saw how to use the `useValue` provider to provide a token of type function, so that the function can later be called lazily.
* We saw how to use the `useFactory` provider, to calculate the value using a method that is called when the value is first needed to be provided.
* We saw how to use the `useFactory` provider, to provide a value of type function (a function that returns a function).
* We saw that the `useFactory` provider may also receive injectable prameters
  * These are set using the `deps` property of the provider.
  * In the `deps` property, we list the tokens that can be used to populate each parameter
  * We saw that we can use `closure` to create a function value, that uses one of these parameters.


## Multi provider and Multi Module
* We saw that when using module imports, the providers of all modules are concatinated 
* We saw that all modules affect the same injector - the `Root Injector`
* We saw that we can define a token of type array, and then provide each item seperately.
* We saw that when several modules provide the same token, only one provider takes effect.
* But, when we use the `multi:true` settings, the various providers are accumulated, and all the values are injected.


## App initialization using Dependency injection
* We saw the `APP_INITIALIZER` token, which is of type function, that either returns `void`, `Promise<void` or `Observable<void>`. 
* We saw that the actual type that angular expects is an array of initialization methods.
* We saw that each module may supply several initializers using the `multi` settings.
* We saw that in order to initalize a service, we need to:
  * use the `useFactory` provider
  * supply the service as parameter using the `deps` property
  * return a function object that calls the init method
  * notice that we take advantage of the closure feature.
* We saw that angular will then await the returned promises and will start rendering the application only once the initializers are all complete.

## Http Interceptors
* We saw how to implement an Http Interceptor by implementing the interface `HttpInterceptor`
* We saw that we register it using the injection Token `HTTP_INTERCEPTORS`
* We saw how to add logic before sending the request
* We saw how to add logic after receiving the response

### Custom Control Value Accessors
* We creates a component that edit a value
    - **Number Spinner** that allows to modify a numeric value by pressing + and -
* We implemented the `ControlValueAccessor` interface 
    - `writeValue` method in order to allow the form control to set the value of the component
    - `registerOnChange` method in order to allow the form control to set a callback which we use to report that the value has changed
    - `registerOnTouched` method in order to allow the form control to set a callback to be called when the control first becomes **touched**
    - `setDisableState` optional method in order to allow the form control the enable and disable the component
* We set a provider for the `NG_VALUE_ACCESSOR` injection token in order to register the component as a value accessor
* We saw how to take advantage of the `FormGroup` object in order to easily implement the component as a sub control. 
    - Specifically we used the reactive nature of the FormGroup in order to push changes and touch modifications to the FormControl




