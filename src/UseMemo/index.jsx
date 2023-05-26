import styled from "styled-components";

// components
import Comparison from "../common/Comparison";
import UseMemoBefore from "./UseMemoBefore";
import UseMemoAfter from "./UseMemoAfter";
import UseMemoMitch from "./UseMemoMitch";

const UseMemo = () => {
    return (
        <UseMemoStyled className="UseMemo">
            <h1>useMemo</h1>

            <h2>Notes</h2>
            <ul>
                <li>It's important to note that you should only use useMemo when you have expensive computations that need to be memoized. Using it for every value in your component can actually hurt performance, as useMemo itself has a small overhead.</li>
                <li>You should only rely on useMemo as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useMemo to improve performance.</li>
                <li>Don't use useMemo until you notice parts of your app are frustratingly slow. "Premature optimisation is the root of all evil", and throwing useMemo everywhere is premature optimisation.</li>
            </ul>

            <h2>When to use</h2>
            <ul>
                <li>You're noticing a component's render is frustratingly slow, and you're passing a calculation to an unknowable number of children, such as when rendering children using Array.map()</li>
                <li>Your app often becomes unresponsive because you're fetching a large amount of data, and having to transform it into a usable format</li>
                <li>If you want to keep a stable reference to an object/array that doesn't require recalculation, consider using useRef.</li>
                <li>On the other hand if you need to recalculate the value when dependencies change, useMemo is the hook for you.</li>
            </ul>

            <p>
                I still do not see the benefit, but maybe because I do not see myself writing components in this fashion. An inline method that gets re-rendered each time.
                Can't we just avoid this alltogether (see UseMemoMitch)? Also, this seems to only happen on synchronous calls. AFAIK setTimeout and Promises are asynchronous, and would not
                delay the rendering of sibling components.
            </p>

            <Comparison>
                <UseMemoBefore />
                <UseMemoAfter />
                <UseMemoMitch />
            </Comparison>
        </UseMemoStyled>
    );
};



export default UseMemo;

const UseMemoStyled = styled.div`
    padding: 20px;
    background-color: #ffffd3;
`;
