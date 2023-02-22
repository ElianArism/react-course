import { SimpleForm } from ".//03-use-effect/03-use-effectt";
import { CounterApp } from "./01-use-state";
import { CounterWCustomHook } from "./02-counter-w-custom-hook";
import { FormWCustomHook } from "./03-use-effect/FormWCustomHook";
import { MultipleCustomHooks } from "./04-examples/MultipleCustomHooks";
import { SelectInputScreen } from "./05-useRef/SelectInputScreen";
import { Layout } from "./06-use-layout-effect/Layout";
import { Memorize } from "./07-memorize/Memorize";
import { UseMemoExample } from "./08-useMemo/Memorize";
import { CallBackHook } from "./09-callback-hook/CallBackHook";
import { Padre } from "./10-tarea-memo/Padre.jsx";

export const HooksApp = () => {
  return (
    <div>
      <h2>hooks</h2>

      {/* Use state */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>UseState</h5>
          <CounterApp></CounterApp>
        </div>
      </div>
      <hr />
      {/* Use counter (custom hook) */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>UseCounter</h5>
          <CounterWCustomHook></CounterWCustomHook>
        </div>
      </div>
      <hr />
      {/* Use Effect (simple form component) */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>UseEffect - Simple Form Component</h5>
          <SimpleForm></SimpleForm>
        </div>
      </div>
      <hr />
      {/* Form W Custom Hook */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>UseEffect - Form W Custom Hook</h5>
          <FormWCustomHook></FormWCustomHook>
        </div>
      </div>
      <hr />
      {/* Multiple Custom Hooks */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>Multiple custom Hooks </h5>
          <MultipleCustomHooks></MultipleCustomHooks>
        </div>
      </div>
      <hr />
      {/* useRef - first approach */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>
            useRef - Mantener la referencia, util para cualquier tipo
            de dato
          </h5>
          <SelectInputScreen></SelectInputScreen>
        </div>
      </div>
      <hr />
      {/* useLayoutEffect */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>
            useLayoutEffect - ejecuta codigo de forma sincrona una vez
            que React termina de renderizar todos sus componentes
          </h5>
          <Layout></Layout>
        </div>
      </div>
      {/* Memo - React */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>
            Memo - Memoriza componentes grandes para solo volver a
            renderizarlos cuando alguna de sus props cambie
          </h5>
          <Memorize></Memorize>
        </div>
      </div>
      <hr />
      {/* useMemo - React */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>
            useMemo - Memoriza funciones pesadas, llamadas asincronas
            y cualquier tipo de dato, tambien su valor de retorno para
            evitar que vuelvan a ejecutarse a no ser que cambien sus
            dependencias
          </h5>
          <UseMemoExample></UseMemoExample>
        </div>
      </div>
      <hr />
      {/* useCallback - React */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>
            useCallback - Memoriza funciones para que al pasarlas como
            prop hacia un componente este guarde la referencia de
            memoria haciendo que no se redibuje nuevamente, utilizarla
            en vez de useMemo cuando no hay valor de retorno, o no
            interesa manipularlo
          </h5>
          <CallBackHook></CallBackHook>
        </div>
      </div>
      <hr />
      {/* Tarea */}
      <hr />
      <div className="row">
        <div className="col px-3">
          <h5>Tarea memos y use Callback</h5>
          <Padre></Padre>
        </div>
      </div>
      <hr />
    </div>
  );
};
