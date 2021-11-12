/**
 *
 * It's generally a good practice to indicate to users the status of any async request.
 *  An example would be fetching data from an API and displaying a loading indicator before rendering the results.
 *  Another example would be a form where you want to disable the submit button when the submission is pending and then display either a success or error message when it completes.
 *  Rather than litter your components with a bunch of useState calls to keep track of the state of an async function, you can use our custom hook which takes an async function as an input and returns the value,
 *  error, and status values we need to properly update our UI.
 *  Possible values for status prop are: "idle", "pending", "success", "error". As you'll see in the code below, our hook allows both immediate execution and delayed execution using the returned execute function.
 *
 */
export declare const useAsync: <T, E = string>(asyncFunction: () => Promise<T>, immediate?: boolean) => {
    execute: () => Promise<void>;
    status: "error" | "idle" | "pending" | "success";
    value: T;
    error: E;
};
