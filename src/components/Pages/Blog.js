import React from 'react';

const Blog = () => {
    return (
        <div className='mb-6'>
            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3 mt-6'>Blog</h2>
            <div className="answers border-2 mt-2 p-4 rounded-lg">
                <div className="question font-bold text-xl bg-primary text-white p-2 rounded-lg">How will you improve the performance of a React Application?</div>
                <div className="answer p-2">To optimize performance on react. we can Keeping component state local where necessary Memoizing React components to prevent unnecessary re-renders Code-splitting in React using dynamic import() Windowing or list virtualization in React Lazy loading images in React</div>
            </div>
            <div className="answers border-2 mt-2 p-4 rounded-lg">
                <div className="question font-bold text-xl bg-primary text-white p-2 rounded-lg">What are the different ways to manage a state in a React application?</div>
                <div className="answer p-2">
                    1. Local state. <br />
                    2. Global state. <br />
                    3. Server state. <br />
                    4. URL state.</div>
            </div>
            <div className="answers border-2 mt-2 p-4 rounded-lg">
                <div className="question font-bold text-xl bg-primary text-white p-2 rounded-lg">How does prototypical inheritance work?</div>
                <div className="answer p-2"> Prototypical inheritance is used to access object properties form another object. we can use javascript prototype to add new properties and methods to and existing object consturctor.We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</div>
            </div>
            <div className="answers border-2 mt-2 p-4 rounded-lg">
                <div className="question font-bold text-xl bg-primary text-white p-2 rounded-lg">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</div>
                <div className="answer p-2">
                    react hook made code simplier. on the useState hook the setProducts is a function that set the value of products. and setProduct return the current value of products. where if we use product = [...] it will keep the previous value and add the new value. thats whay we dont use this.
                </div>
            </div>
            <div className="answers border-2 mt-2 p-4 rounded-lg">
                <div className="question font-bold text-xl bg-primary text-white p-2 rounded-lg">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</div>
                <div className="answer p-2">
                    To Find the products by name we can use filter,find (will Retun first value), included and indexOf <br />
                    <code className='text-error'>
                        const products = [productList]; <br />
                        const filterBy = 'productName';<br />
                        const filterProduct = products.filter(product => product = filterBy);<br />
                        console.log(filterProduct)
                    </code>
                </div>
            </div>
            <div className="answers border-2 mt-2 p-4 rounded-lg">
                <div className="question font-bold text-xl bg-primary text-white p-2 rounded-lg">What is a unit test? Why should write unit tests?</div>
                <div className="answer p-2">Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code,</div>
            </div>

        </div>
    );
};

export default Blog;