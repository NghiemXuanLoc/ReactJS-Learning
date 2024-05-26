
const handleShowUser = () => {
    const user = {
        userName: document.getElementById("user-name").value,
        password: document.getElementById("password").value
    }
    console.log(user);
}

const formLogin = React.createElement("div", null, 
    React.createElement('h1', {
        style: {
            color: "red"
        }
    }, 'Login form'),
    React.createElement('div', {
        style: {
            marginBottom: '10px'
        }
    }, 
        React.createElement('label', {
            style: {
                width: '100px',
                display: 'inline-block'
            }
        }, 'User Name'),
        React.createElement('input', {
            type: 'text',
            placeholder: 'NghiemXuanLoc',
            id: 'user-name'
        }, null)
    ),
    React.createElement('div', {
        style: {
            marginBottom: '10px'
        }
    }, 
        React.createElement('label', {
            style: {
                display: 'inline-block',
                width: '100px',
                
            }
        }, 'Password'),
        React.createElement('input', {
            type: 'password',
            id: 'password'
        }, null)
    ),
    React.createElement('button', {
        onClick: handleShowUser
    }, "Login"),
    React.createElement('p', null,
     'Not yet a member? ',
     React.createElement("a", {
        href: '#'
     }, 'Register'))
)


const courses = ['java', 'php', 'js', 'c++'];

const headleCourse = React.createElement('ul', null,
    courses.map((course)=> {
        return React.createElement('li', null, course);
    })
)



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(headleCourse);

