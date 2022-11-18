import './App.css';
import {useState} from "react";

//화면에 보일부분!

function App() {
    //useState 는 배열을 리턴해준다!
    const [mode, changeMode] = useState('welcome');
    const [id, changeid] = useState(null);
    const [nextId, changeNextId] = useState(4);
    const [topics, changetopics] = useState([
        {id: 1, title: "html", body: ' html is ...'},
        {id: 2, title: "css", body: 'css is ...'},
        {id: 3, title: "js", body: ' js is ...'},
    ]);
    let content = null;
    let contextControl = null;
    if (mode === 'Welcome') {
        content = <Article title="ShowYourReact" body="Welcome React"></Article>;
    } else if (mode === 'Read') {
        let title, body = null;
        for (const element of topics) {
            if (element.id === id) {
                title = element.title;
                body = element.body;
            }
        }
        content = <Article title={title} body={body}></Article>;
        contextControl = <>
            <li><a href={"/update/" + id} onClick={event => {
                event.preventDefault();
                changeMode('Update')
            }
            }>Update</a></li>
            <li><input type='button' value='delete' onClick={()=>{
            const newTopics=[];
            for(let i=0;i<topics.length; i++){
                if(topics[i].id !== id){
                    newTopics.push(topics[i])
                }
            }
            changetopics(newTopics);
            }
            }/></li>
        </>
    } else if (mode === 'Create') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id: nextId, title: _title, body: _body}
            const newTopics = [...topics];
            newTopics.push(newTopic);
            changetopics(newTopics);
            changeMode('Read');
            changeNextId(nextId);
            changeNextId(nextId + 1);
        }}></Create>

    } else if (mode === 'Update') {
        let title, body = null;
        for (const element of topics) {
            if (element.id === id) {
                title = element.title;
                body = element.body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title, body) => {
            const newTopics = [...topics];
            const UpdateTopic = {id: id, title: title, body: body};
            for (let i = 0; i < newTopics.length; i++) {
                if (newTopics[i].id === id) {
                    newTopics[i] = UpdateTopic;
                    break;
                }
            }
            changetopics(newTopics);
            changeMode('READ');
        }
        }></Update>
    }
    return (
        <div>
            <Header title="React" body='Hello React' onChangeMode={() => {
                changeMode('Welcome');
            }}></Header>
            <Nav topics={topics} onChangeMode={(id) => {
                changeMode('Read');
                changeid(id);
            }}></Nav>
            {content}
            <ul>
                <li><a href='/create' onClick={(event) => {
                    event.preventDefault();
                    changeMode('Create')
                }}>Create</a></li>
                {contextControl}
            </ul>
        </div>
    );
}

//header 설정!
function Header(props) {
    return <header>
        <h1><a href="/" onClick={(event) => {
            //링크를 클릭했을때 기능을 제거
            event.preventDefault();
            //props의 함수를 호출
            props.onChangeMode(props.body);
        }}>
            {props.title}
        </a>
        </h1>
    </header>
}

function Nav(props) {
    const lists = []
    for (const element of props.topics) {
        //topics 함수를 순회하면서 그 안의 값을 tt에 전달
        let tt = element;
        // tt에 들어오는 element 값들을 lists라는 빈 배열에 push함수를 사용해 넣어준다.
        lists.push(<li key={tt.id}>
            <a href={'/read' + tt.id}
               onClick={(event) => {
                   event.preventDefault();
                   props.onChangeMode(Number(tt.id));
               }}>{tt.title}
            </a>
        </li>)
    }
    return <nav>
        <ol>
            {lists}
        </ol>
    </nav>
}

//Article 설정
function Article(props) {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function Create(props) {
    return <article>
        <h2>Create</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onCreate(title, body);
        }}>
            <p><input type="text" name='title' placeholder='제목을 입력해주세요.'/></p>
            <p><textarea name="body" placeholder='내용을 입력해주세요'></textarea></p>
            <p><input type="submit" value="Create"/></p>
        </form>
    </article>
}

function Update(props) {
    const [title, changeTitle] = useState(props.title);
    const [body, changeBody] = useState(props.body);
    return <article>
        <h2>UPdate</h2>
        <form onSubmit={event => {
            event.preventDefault();
            const title = event.target.title.value;
            const body = event.target.body.value;
            props.onUpdate(title, body);
        }}>
            <p><input type="text" name='title' value={title} onChange={event => {
                changeTitle(event.target.value)
            }}/></p>
            <p><textarea name="body" value={body} onChange={event => {
                changeBody(event.target.value);
            }}></textarea></p>
            <p><input type="submit" value="Update"/></p>
        </form>
    </article>
}

export default App;
