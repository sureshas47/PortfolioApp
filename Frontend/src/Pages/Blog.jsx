import React from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #444;
  font-size: 1.1rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 10px;
`;

const BlogContent = styled.div`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 20px;

  h2 {
    font-size: 1.8rem;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #222;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 5px;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 5px;
  }

  p {
    margin-bottom: 20px;
  }

  code {
    background-color: #f4f4f4;
    padding: 2px 4px;
    border-radius: 4px;
    font-family: "Courier New", Courier, monospace;
  }

  pre {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 4px;
    overflow-x: auto;
    white-space: pre-wrap;
    font-family: "Courier New", Courier, monospace;
  }
`;

const BlogFooter = styled.footer`
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
  color: #777;
  border-top: 1px solid #eaeaea;
  margin-top: 20px;
`;

function Blog() {
  const content = `
    <h2>Understanding React-Redux: Managing State in React Applications</h2>

    <p><strong>React-Redux</strong> is a powerful library that provides a robust solution for state management in React applications. It helps manage the application's state in a predictable and maintainable way. Here’s how you can integrate React-Redux into your React application:</p>

    <h3>1. Install Dependencies</h3>
    <p><strong>Step 1:</strong> Open your terminal.</p>
    <p><strong>Step 2:</strong> Run the following command to install Redux and React-Redux:</p>
    <pre><code>npm install redux react-redux</code></pre>

    <h3>2. Create Actions and Reducers</h3>
    <p><strong>Step 1:</strong> Define your action types and action creators. Actions are plain objects that describe changes in your application.</p>
    <p><strong>Step 2:</strong> Implement reducers. Reducers are functions that specify how the application's state changes in response to actions.</p>
    <p><strong>Example Action:</strong></p>
    <pre><code>
    export const SET_BLOG_CONTENT = 'SET_BLOG_CONTENT';

    export const setBlogContent = (content) => ({
      type: SET_BLOG_CONTENT,
      payload: content,
    });
    </code></pre>
    <p><strong>Example Reducer:</strong></p>
    <pre><code>
    import { SET_BLOG_CONTENT } from './actions';

    const initialState = {
      content: 'Initial blog content',
    };

    const blogReducer = (state = initialState, action) => {
      switch (action.type) {
        case SET_BLOG_CONTENT:
          return { ...state, content: action.payload };
        default:
          return state;
      }
    };

    export default blogReducer;
    </code></pre>

    <h3>3. Configure the Store</h3>
    <p><strong>Step 1:</strong> Create a Redux store using the reducer. The store holds the application's state.</p>
    <p><strong>Step 2:</strong> Export the store for use in your application.</p>
    <p><strong>Example Store Configuration:</strong></p>
    <pre><code>
    import { createStore } from 'redux';
    import blogReducer from './reducer';

    const store = createStore(blogReducer);

    export default store;
    </code></pre>

    <h3>4. Provide the Store</h3>
    <p><strong>Step 1:</strong> Use the <code>Provider</code> component from <code>react-redux</code> to make the store available to your React components.</p>
    <p><strong>Step 2:</strong> Wrap your application with the <code>Provider</code> component and pass the store as a prop.</p>
    <p><strong>Example:</strong></p>
    <pre><code>
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';
    import store from './store';
    import App from './App';

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
    </code></pre>

    <h3>5. Connect Components</h3>
    <p><strong>Step 1:</strong> Use the <code>connect</code> function or hooks like <code>useSelector</code> and <code>useDispatch</code> to access the Redux state and dispatch actions from your components.</p>
    <p><strong>Step 2:</strong> Implement a component that connects to the Redux store and interacts with the state.</p>
    <p><strong>Example Component:</strong></p>
    <pre><code>
    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { setBlogContent } from './actions';

    function BlogComponent() {
      const content = useSelector((state) => state.content);
      const dispatch = useDispatch();

      React.useEffect(() => {
        dispatch(setBlogContent('Updated blog content.'));
      }, [dispatch]);

      return (
        <div>
          <h2>Blog Title</h2>
          <p>{content}</p>
        </div>
      );
    }

    export default BlogComponent;
    </code></pre>

    <h3>6. Advanced Topics</h3>
    <h4>Middleware:</h4>
    <p><strong>Step 1:</strong> Install middleware like redux-thunk for handling asynchronous actions.</p>
    <pre><code>npm install redux-thunk</code></pre>
    <p><strong>Step 2:</strong> Configure the store to use middleware.</p>
    <pre><code>
    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import blogReducer from './reducer';

    const store = createStore(blogReducer, applyMiddleware(thunk));

    export default store;
    </code></pre>

    <h4>Redux DevTools:</h4>
    <p><strong>Step 1:</strong> Install Redux DevTools Extension.</p>
    <pre><code>npm install redux-devtools-extension</code></pre>
    <p><strong>Step 2:</strong> Configure the store to use Redux DevTools.</p>
    <pre><code>
    import { createStore, applyMiddleware } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension';
    import thunk from 'redux-thunk';
    import blogReducer from './reducer';

    const store = createStore(blogReducer, composeWithDevTools(applyMiddleware(thunk)));

    export default store;
    </code></pre>

    <h3>Conclusion:</h3>
    <p>React-Redux streamlines state management in React applications by providing a clear and predictable approach to handling state. By following these steps, you can integrate Redux into your React app and leverage its powerful features for managing application state effectively.</p>
  `;

  return (
    <BlogContainer className="mt-5">
      <BlogTitle>Understanding React-Redux</BlogTitle>
      <BlogContent>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </BlogContent>
      <BlogFooter>© 2024 Suresh's Blog</BlogFooter>
    </BlogContainer>
  );
}

export default Blog;
