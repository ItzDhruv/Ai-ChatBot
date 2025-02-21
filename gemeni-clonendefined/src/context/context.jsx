import { createContext } from "react" ;

export const Context = createContext();

const ContextProvider = (props) => {

const contextVa1ue = {

}

return (
<Context.Provider value={contextVa1ue}>
{props . children}
</Context.Provider> 
)
}

export default ContextProvider