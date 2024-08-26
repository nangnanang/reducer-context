# React + Vite

reducer를 사용한 todoList 만들기

reducer만을 사용한 App.jsx를 만들었다가
reducer+contextAPI를 사용한 ContextApp.jsx를 만들었다. 

원래는 context 파일에 context.provider를 반환하는 컴포넌트를 만드려고 했는데, child components props가 전달되지 않아서 약간 번잡스러운 형태로 완성되었다. 

(수정) 이전 실패 파일을 삭제해서 정확한 오류 이유는 알 수 없지만 context파일에서 context.provider 컴포넌트를 생성하고 export하는 데에 성공했다.