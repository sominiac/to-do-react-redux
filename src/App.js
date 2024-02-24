function App() {
    return (
        <div className="App">
            <header className="app__header">
                <h3 className="header__title">Todo list</h3>
            </header>
            <section className="tasks current-tasks">
                <h4 className="tasks__title">Текущие задачи</h4>
                <ul className="tasks__list">
                    <li className="tasks__list-element">
                        <div className="task">
                            <input className="radio-button" id="task-check-button" type="radio"/>
                            <label className="task__name" htmlFor="task-check-button">Сходить в магазин</label>
                            <button className="icon-button task__delete-button"></button>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="tasks completed-tasks">
                <h4 className="tasks__title">Завершённые задачи</h4>
                <ul className="tasks__list">
                    <li className="tasks__list-element">
                        <div className="task">
                            <input className="radio-button" id="completed-task-check-button" type="radio"/>
                            <label className="task__name" htmlFor="completed-task-check-button">Сходить в
                                магазин</label>
                            <button className="icon-button task__delete-button"></button>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;
