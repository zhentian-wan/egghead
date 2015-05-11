#Custom Template

Write custom template in angular-formly

```
    app.run(function(formlyConfig) {
        formlyConfig.setType({
            name: 'input',
            templateUrl: 'input.html'
        });
    });
```

## Shar state with each field in form

```
            <formly-form model="vm.model" fields="vm.fields" options="vm.options">
                <button class="btn btn-primary" ng-disabled="vm.form.$invalid" >Submit</button>
            </formly-form>
```

Use formState object in options:
```
			vm.options= {
						formState: {
							foo: 'bar'
						}
					}
```