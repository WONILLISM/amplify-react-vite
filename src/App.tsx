import { defineCustomElements } from "@aws-amplify/ui-components/dist/components/index.js";
import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // default theme

defineCustomElements(window);

function App() {
  return (
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  );
}

export default withAuthenticator(App);
