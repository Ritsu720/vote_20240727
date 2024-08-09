<script>
import { RouterLink } from 'vue-router';

export default{
    data(){
        return{
            currentDate: "",
            defaultEndDate: "",
            survey: {
                title: "",
                description: "",
                location: "",
                duration: "",
                start_date: "",
                end_date: ""
            }
        }
    },
    components: {
        RouterLink
    },
    created(){
        // 設置開始日期預設為當天（最小值也是當天）
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        let currDate = `${year}-${month}-${day}`;
        this.currentDate = currDate;
        console.log("current date: " + this.currentDate);

        // 設置截數日期預設為當天+7（最小值是開始日期）
        let defaultEnd = new Date();
        defaultEnd.setDate(date.getDate() + 7);

        const defaultEndYear = defaultEnd.getFullYear();
        const defaultEndMonth = (defaultEnd.getMonth() + 1).toString().padStart(2, '0');
        const defaultEndDay = defaultEnd.getDate().toString().padStart(2, '0');

        let fullEndDate = `${defaultEndYear}-${defaultEndMonth}-${this.defaultEndDate}`
        this.defaultEndDate = fullEndDate;
        console.log("default end date: " + this.defaultEndDate)
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
            <span style="color: red;">*</span>
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
            <input type="date">
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