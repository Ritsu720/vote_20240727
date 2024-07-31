<script>
import { RouterLink } from 'vue-router';

export default{
    data(){
        return{

        }
    },
    components: {
        RouterLink,
    },
    methods: {
        goTo(x){
            this.$router.push(x)
        },
    }
}
</script>


<template>
<div class="show">
    <div class="firstArea">
        <p class="firstTitle">Choose Your Vote</p>
    </div>
    <div class="secondArea">
        <div class="group voteChoice">
            <div class="hoverBlock groupBlock">
                <div class="choiceTop">
                    <i class="fa-solid fa-users"></i>
                </div>
                <p class="choiceTitle">Group Poll</p>
                <p>Choose your times, let ppl vote and find the option that suits everyone.</p>
                <div class="create" @click="goTo('/Group')">Create</div>
            </div>
        </div>
        <div class="toOnly voteChoice">
            <div class="hoverBlock toOnlyBlock">
                <div class="choiceTop">
                    <i class="fa-solid fa-user"></i>
                </div>
                <p class="choiceTitle">To Only</p>
                <p>Ask someone to pick a time that you specify.</p>
                <div class="create">Create</div>
            </div>
            
        </div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.show{
    height: 80vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: blue;
}

.firstArea{
    .firstTitle{
        font-size: 20pt;
    }
}

.secondArea{
    margin: 50px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    // background-color: red;
    .voteChoice{
        width: 250px;
        height: 350px;
        border-radius: 5px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .hoverBlock{
            width: 220px;
            height: 320px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .groupBlock{
            transition: background-color 0.2s ease;
            &:hover{
                background-color: #dcedea83;
            }
        }
        .toOnlyBlock{
            transition: background-color 0.2s ease;
            &:hover{
                background-color: #edd2d68b;
            }
        }
        .choiceTop{
            width: 70px;
            height: 70px;
            font-size: 45pt;
            .fa-users{
                color: #BED1CF;
            }
            .fa-user{
                color: #E78895;
            }
        }
        .choiceTitle{
            font-size: 16pt;
            margin-top: 30px;
        }
        .create{
            width: 80px;
            height: 30px;
            // border: 1px solid #8D493A;
            // color: #8D493A;
            border: 1px solid #8D493A;
            color: #8D493A;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            transition: background-color 0.2s ease;
            &:hover{
                background-color: #8d493a;
                color: white
            }
        }
    }
}
</style>