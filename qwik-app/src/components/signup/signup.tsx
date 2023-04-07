import { component$, useStore, $ } from "@builder.io/qwik";
import * as SibApiV3Sdk from '@sendinblue/client';

export default component$(() => {
  const store = useStore({
    name: "",
    email: ""
  })

  const handleSubmit = $((e: any) => {
    e.preventDefault();

    const apiInstance = new SibApiV3Sdk.ContactsApi()
    
    apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, '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')

    apiInstance.createContact({ email: store.email, attributes: { FIRSTNAME: store.name, LASTNAME: "", SMS: "" }, updateEnabled: true, listIds: [2] }).then((data) => {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      return false;
      //window.location.href = "/success-signup";
    }, error => {alert(error); return false;}).catch(error => {alert(error); return false;});

    return false;
  })

  return (
    <div class="bg-[rgba(0,0,0,0.7)] py-6 px-8 rounded-lg w-full sm:w-96 mx-auto">
      <form class="space-y-4" onSubmit$={(e) => handleSubmit(e)}>
        <p>
          <input type="text" name="name" placeholder="First name" class="input w-full" onInput$={(e) => store.name = (e.target as HTMLInputElement).value}/>
        </p>
        <p>
          <input type="email" name="email" placeholder="Email" class="input w-full" onInput$={(e) => store.email = (e.target as HTMLInputElement).value}/>
        </p>
        <p hidden>
          We will never sell your data!
        </p>
        <button class="btn btn-primary disabled:btn-disabled" type="submit" disabled={store.name === "" || store.email === ""}>
          Sign Me Up!
        </button>
      </form>
    </div>
  );
});
