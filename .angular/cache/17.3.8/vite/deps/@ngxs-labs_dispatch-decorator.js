import {
  Store
} from "./chunk-7O5B3IV6.js";
import "./chunk-NKXUTA62.js";
import {
  INJECTOR$1,
  NgModule,
  NgModuleRef$1,
  NgZone,
  _global,
  isPromise,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-U7EX62FW.js";
import {
  Subject,
  isObservable,
  takeUntil
} from "./chunk-EXEDAU5J.js";
import "./chunk-5JEZL4LT.js";

// node_modules/@ngxs-labs/dispatch-decorator/fesm2020/ngxs-labs-dispatch-decorator.mjs
function unwrapObservable(store, wrapped, actionCompleter) {
  if (actionCompleter !== null) {
    wrapped = wrapped.pipe(takeUntil(actionCompleter.cancelUncompleted$));
  }
  wrapped.subscribe({
    next: (actionOrActions) => store.dispatch(actionOrActions)
  });
  return wrapped;
}
function unwrapPromise(store, wrapped) {
  return wrapped.then((actionOrActions) => {
    store.dispatch(actionOrActions);
    return actionOrActions;
  });
}
function unwrapAndDispatch(store, wrapped, actionCompleter) {
  if (isPromise(wrapped)) {
    return unwrapPromise(store, wrapped);
  } else if (isObservable(wrapped)) {
    return unwrapObservable(store, wrapped, actionCompleter);
  } else {
    store.dispatch(wrapped);
    return wrapped;
  }
}
var NgxsDispatchPluginModuleNotImported = class extends Error {
  constructor() {
    super(...arguments);
    this.message = "NgxsDispatchPluginModule is not imported";
  }
};
var _injector = null;
function setInjector(injector) {
  _injector = injector;
}
function getStore() {
  if (_injector === null) {
    throw new NgxsDispatchPluginModuleNotImported();
  } else {
    return _injector.get(Store);
  }
}
function getNgZone() {
  if (_injector === null) {
    throw new NgxsDispatchPluginModuleNotImported();
  } else {
    return _injector.get(NgZone);
  }
}
var ActionCompleter = class {
  constructor() {
    this.cancelUncompleted$ = new Subject();
  }
  cancelPreviousAction() {
    this.cancelUncompleted$.next();
  }
};
function createActionCompleter(cancelUncompleted) {
  return cancelUncompleted ? new ActionCompleter() : null;
}
var NG_FACTORY_DEF = "ɵfac";
var InjectorInstance = Symbol("InjectorInstance");
var FactoryHasBeenDecorated = Symbol("FactoryHasBeenDecorated");
function ensureLocalInjectorCaptured(target) {
  if (FactoryHasBeenDecorated in target.constructor.prototype) {
    return;
  }
  const constructor = target.constructor;
  if (typeof constructor[NG_FACTORY_DEF] === "function") {
    decorateFactory(constructor);
  } else if (ngDevMode) {
    decorateFactoryLater(constructor);
  }
  target.constructor.prototype[FactoryHasBeenDecorated] = true;
}
function localInject(instance, token) {
  const injector = instance[InjectorInstance];
  return injector ? injector.get(token) : null;
}
function decorateFactory(constructor) {
  const factory = constructor[NG_FACTORY_DEF];
  if (typeof factory !== "function") {
    return;
  }
  const def = constructor.ɵprov || constructor.ɵpipe || constructor.ɵcmp || constructor.ɵdir;
  const decoratedFactory = () => {
    const instance = factory();
    instance[InjectorInstance] = ɵɵdirectiveInject(
      // We're using `INJECTOR` token except of the `Injector` class since the compiler
      // throws: `Cannot assign an abstract constructor type to a non-abstract constructor type.`.
      // Caretaker note: that this is the same way of getting the injector.
      INJECTOR$1
    );
    return instance;
  };
  if (def) {
    def.factory = decoratedFactory;
  }
  Object.defineProperty(constructor, NG_FACTORY_DEF, {
    get: () => decoratedFactory
  });
}
function decorateFactoryLater(constructor) {
  try {
    Promise.resolve().then(() => {
      decorateFactory(constructor);
    });
  } catch {
    _global.process && _global.process.nextTick && _global.process.nextTick(() => {
      decorateFactory(constructor);
    });
  }
}
var defaultOptions = {
  cancelUncompleted: false
};
function Dispatch(options = defaultOptions) {
  return (target, propertyKey, descriptor) => {
    let originalValue;
    const actionCompleter = createActionCompleter(options.cancelUncompleted);
    function wrapped() {
      if (actionCompleter !== null) {
        actionCompleter.cancelPreviousAction();
      }
      const store = localInject(this, Store) || getStore();
      const ngZone = localInject(this, NgZone) || getNgZone();
      const wrapped2 = originalValue.apply(this, arguments);
      return ngZone.runOutsideAngular(() => unwrapAndDispatch(store, wrapped2, actionCompleter));
    }
    if (typeof descriptor?.value === "function") {
      originalValue = descriptor.value;
      descriptor.value = wrapped;
    } else {
      Object.defineProperty(target, propertyKey, {
        set: (value) => originalValue = value,
        get: () => wrapped
      });
    }
    ensureLocalInjectorCaptured(target);
  };
}
var NgxsDispatchPluginModule = class _NgxsDispatchPluginModule {
  constructor(ngModuleRef) {
    setInjector(ngModuleRef.injector);
    ngModuleRef.onDestroy(() => {
      setInjector(null);
    });
  }
  static forRoot() {
    return {
      ngModule: _NgxsDispatchPluginModule
    };
  }
};
NgxsDispatchPluginModule.ɵfac = function NgxsDispatchPluginModule_Factory(t) {
  return new (t || NgxsDispatchPluginModule)(ɵɵinject(NgModuleRef$1));
};
NgxsDispatchPluginModule.ɵmod = ɵɵdefineNgModule({
  type: NgxsDispatchPluginModule
});
NgxsDispatchPluginModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsDispatchPluginModule, [{
    type: NgModule
  }], function() {
    return [{
      type: NgModuleRef$1
    }];
  }, null);
})();
export {
  Dispatch,
  NgxsDispatchPluginModule
};
//# sourceMappingURL=@ngxs-labs_dispatch-decorator.js.map
