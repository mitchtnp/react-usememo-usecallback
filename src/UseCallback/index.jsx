import styled from "styled-components";

// components
import Comparison from "../common/Comparison";
import UseCallbackBefore from "./UseCallbackBefore";
import UseCallbackAfter from "./UseCallbackAfter";
import UseCallbackMitch from "./UseCallbackMitch";

const UseCallback = () => {
    return (
        <UseCallbackStyled className="UseCallback">
            <h1>useCallback</h1>

            <h2>Notes</h2>
            <ul>
                <li>You should only rely on useCallback as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useCallback back.</li>
                <li>useCallback is a React Hook that lets you cache a function definition between re-renders.</li>
                <li>Skipping re-rendering of components: When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components.</li>
            </ul>

            <h2>When to use</h2>
            <ul>
                <li>Why useCallback is Used? It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. The usecallback hook is used when you have a component in which a child is rendering repeatedly without the need for it.</li>
            </ul>

            <Comparison>
                <UseCallbackBefore />
                <UseCallbackAfter />
                <UseCallbackMitch />
            </Comparison>
        </UseCallbackStyled>
    );
};



export default UseCallback;

const UseCallbackStyled = styled.div`
    padding: 20px;
    background-color: #d3f8ff;
`;
