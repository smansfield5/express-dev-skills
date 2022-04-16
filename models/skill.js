const skills = [
    {id: 555555, skill: 'coding', done: false},
    {id: 333333, skill: 'functions', done: false},
    {id: 222222, skill: 'loops', done: false}
];

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    update
};

function update(id, skill) {
    id = parseInt(id);
    const updatedSkill = skills.find((skill) => skill.id === id);
    Object.assign(updatedSkill, skill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function getAll() {
    return skills;
}