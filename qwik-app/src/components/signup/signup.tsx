import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({
    name: "",
    email: ""
  })

  return (
    <div class="bg-[rgba(0,0,0,0.7)] py-6 px-8 rounded-lg w-full sm:w-96 mx-auto">
      <form name="signup" method="POST" data-netlify="true" action="/success-signup" class="space-y-4">
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
