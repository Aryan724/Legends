const quotes = [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];
const tasks = [];
const badges = [];
let weeklyGoal = 0;

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('setGoalBtn').addEventListener('click', setWeeklyGoal);
document.getElementById('suggestTaskBtn').addEventListener('click', suggestTask);
document.getElementById('newQuoteBtn').addEventListener('click', getNewQuote);
document.getElementById('trackHabitBtn').addEventListener('click', trackHabit);
document.getElementById('startPomodoro').addEventListener('click', startPomodoro);
document.getElementById('focusModeBtn').addEventListener('click', activateFocusMode);
document.getElementById('startTimerBtn').addEventListener('click', startStudyTimer);

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        updateTaskList();
        awardBadge('taskAdded');
    }
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function setWeeklyGoal() {
    const goalInput = document.getElementById('studyGoalInput');
    weeklyGoal = parseInt(goalInput.value);
    document.getElementById('goalDisplay').textContent = `Your weekly goal: ${weeklyGoal} hours`;
}

function suggestTask() {
    const suggestions = ["Revise Chapter 1", "Complete 5 math problems", "Write an essay", "Watch a Science video", "Solve a practice paper"];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    document.getElementById('aiTaskSuggestion').textContent = `AI Suggestion: ${randomSuggestion}`;
}

function getNewQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = randomQuote;
}

function trackHabit() {
    const habitInput = document.getElementById('habitInput');
    const habit = habitInput.value;
    if (habit) {
        document.getElementById('habitTracker').innerHTML += `<p>Tracked Habit: ${habit}</p>`;
        habitInput.value = '';
    }
}

function startPomodoro() {
    alert('Pomodoro started: 25 minutes study, 5 minutes break');
}

function activateFocusMode() {
    document.body.style.filter = 'grayscale(100%)';
}

function startStudyTimer() {
    const minutesInput = document.getElementById('studyMinutesInput');
    const minutes = parseInt(minutesInput.value);
    if (minutes) {
        alert(`Study timer set for ${minutes} minutes`);
    }
}

function awardBadge(type) {
    if (type === 'taskAdded') {
        badges.push('Task Master');
        updateBadges();
    }
}

function updateBadges() {
    const badgeList = document.getElementById('badgeList');
    badgeList.innerHTML = '';
    badges.forEach((badge) => {
        const div = document.createElement('div');
        div.textContent = badge;
        badgeList.appendChild(div);
    });
}
