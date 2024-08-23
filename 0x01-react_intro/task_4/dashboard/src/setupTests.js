// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17";
// import { TextEncoder, TextDecoder } from "util";
// import fetch from "node-fetch";

// Make TextEncoder, TextDecoder, and fetch globally available
// globalThis.TextEncoder = TextEncoder;
// globalThis.TextDecoder = TextDecoder;
// globalThis.fetch = fetch;

// Configure Enzyme with the React 17 adapter
configure({ adapter: new Adapter() });
