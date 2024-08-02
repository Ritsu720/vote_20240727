<script>
import { RouterLink } from 'vue-router';

export default{
    data(){
        return{

        }
    },
    components: {
        RouterLink
    },
    methods: {
        goTo(x){
            this.$router.push(x)
        }
    },
}
</script>


<template>
<div class="show">
    <div class="firstArea block">
        <div class="firstAreaTitle">
            <h2>Create a Group Vote</h2>
        </div>
        <hr>
        <div class="selection">
            <p>Title</p>
            <input type="text" class="textInput" placeholder="What's the occasion?">
        </div>
        <div class="selection">
            <p>Description</p>
            <input type="text" class="textInput" placeholder="Add the description of the vote.">
        </div>
        <div class="selection">
            <p>Location</p>
            <input type="text" class="textInput" placeholder="Where will the event happen?">
        </div>
    </div>
    <div class="secondArea block">
        <h2>Add your times</h2>
        <div class="duration">
            <label for="duration">Duration</label>
            <select name="duration" id="">
                <option value="30min">30min</option>
                <option value="1hr">1hr</option>
                <option value="1hr30min">1hr30min</option>
                <option value="2hr">2hr</option>
                <option value="2hr30min">2hr30min</option>
                <option value="3hr">3hr</option>
                <option value="allDay">All Day</option>
                <!-- <option value="custom">Custom...</option> -->
            </select>
        </div>
        <div class="calendar">

        </div>
    </div>
    <div class="thirdArea block">
        <h2>Options</h2>
        <div class="selectSettings">
            <label for="deadline">Deadline</label>
            <div class="dateTimePicker">

            </div>
        </div>
        <div class="selectSettings"></div>
        <div class="selectSettings"></div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.show{
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.block{
    width: 70vw;
    min-height: 300px;
    border: 1px solid #DFD3C3;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.firstArea{
    .firstAreaTitle{
        height: 50px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
    }
    .selection{
        
    }
}
</style>