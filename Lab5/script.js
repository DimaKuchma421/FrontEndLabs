'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com';

const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const searchInput = document.querySelector('#searchInput');
const taskList = document.querySelector('#taskList');
const filterButtons = document.querySelectorAll('.filter-btn');
const counter = document.querySelector('#counter');
const loader = document.querySelector('#loader');
const message = document.querySelector('#message');
const userInfo = document.querySelector('#userInfo');

let tasks = [];
let currentFilter = 'all';
let searchText = '';
let nextId = 201;

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

function showMessage(text) {
    message.textContent = text;
}

function clearMessage() {
    message.textContent = '';
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.dataset.id = task.id;

    if (task.completed) {
        li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('task-checkbox');

    const span = document.createElement('span');
    span.classList.add('task-title');
    span.textContent = task.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.classList.add('task-delete');
    deleteBtn.textContent = 'Видалити';

    li.append(checkbox, span, deleteBtn);
    return li;
}

function getVisibleTasks() {
    return tasks.filter((task) => {
        const matchesFilter =
            currentFilter === 'all' ||
            (currentFilter === 'active' && !task.completed) ||
            (currentFilter === 'completed' && task.completed);

        const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
        return matchesFilter && matchesSearch;
    });
}

function renderTasks() {
    taskList.innerHTML = '';

    const visibleTasks = getVisibleTasks();

    visibleTasks.forEach((task) => {
        taskList.append(createTaskElement(task));
    });

    updateCounter();
}

function updateCounter() {
    const activeCount = tasks.filter((task) => !task.completed).length;
    counter.textContent = `Активних завдань: ${activeCount}`;
}

function renderUserInfo(user) {
    userInfo.textContent = `Користувач: ${user.name} (${user.email})`;
}

async function loadInitialData() {
    showLoader();
    clearMessage();

    try {
        const [todosResponse, userResponse] = await Promise.all([
            fetch(`${API_URL}/todos?_limit=20`),
            fetch(`${API_URL}/users/1`)
        ]);

        if (!todosResponse.ok || !userResponse.ok) {
            throw new Error('Помилка завантаження даних');
        }

        const [todos, user] = await Promise.all([
            todosResponse.json(),
            userResponse.json()
        ]);

        tasks = todos;
        renderUserInfo(user);
        renderTasks();
    } catch (error) {
        console.error(error);
        showMessage('Не вдалося завантажити дані. Спробуйте пізніше.');
    } finally {
        hideLoader();
    }
}

async function addTask(title) {
    showLoader();
    clearMessage();

    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title,
                completed: false,
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const newTask = await response.json();
        newTask.id = nextId;
        nextId += 1;

        tasks.unshift(newTask);
        taskInput.value = '';
        addBtn.disabled = true;
        renderTasks();
    } catch (error) {
        console.error(error);
        showMessage('Не вдалося створити завдання.');
    } finally {
        hideLoader();
    }
}

async function toggleTask(id, completed) {
    clearMessage();

    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ completed })
        });

        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        tasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed };
            }
            return task;
        });

        renderTasks();
    } catch (error) {
        console.error(error);
        showMessage('Не вдалося оновити завдання.');
    }
}

async function deleteTask(id) {
    clearMessage();

    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        tasks = tasks.filter((task) => task.id !== id);
        renderTasks();
    } catch (error) {
        console.error(error);
        showMessage('Не вдалося видалити завдання.');
    }
}

function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = taskInput.value.trim();
    if (title === '') {
        return;
    }

    addTask(title);
});

taskInput.addEventListener('input', () => {
    addBtn.disabled = taskInput.value.trim() === '';
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        taskInput.value = '';
        addBtn.disabled = true;
    }
});

taskList.addEventListener('click', (event) => {
    const target = event.target;
    const taskItem = target.closest('.task-item');

    if (!taskItem) {
        return;
    }

    const taskId = Number(taskItem.dataset.id);

    if (target.classList.contains('task-delete')) {
        deleteTask(taskId);
    }

    if (target.classList.contains('task-checkbox')) {
        toggleTask(taskId, target.checked);
    }
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

searchInput.addEventListener('input', debounce((event) => {
    searchText = event.target.value;
    renderTasks();
}, 300));

loadInitialData();
