// we can do Name export multipletime but the Defualt export can be more than one 
export const Amarjeet = () => { // Name Export
    return (
        // (Fragment) 
         <>
        <h1>This is my Second Component</h1>
        <p>This is a Tag</p>
        </>
    );
};
export const Amarjeet1 = () => { // Name Export
    return (
        <div>
        <h1>This is my Second Component</h1>
        <p>This is a Tag</p>
        </div>
    );
};

const A = () => { // Default export
    return (
        <div>
            <h1>This is My Second Component of A.</h1>
            <p>This is a Tag</p>
        </div>
    );
};

export default A;  // default export