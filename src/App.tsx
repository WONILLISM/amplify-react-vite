import { AmplifyProvider, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; // default theme

function App() {
  return (
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  );
}

export default withAuthenticator(App);
