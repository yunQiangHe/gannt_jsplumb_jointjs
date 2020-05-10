/*
 * @Author: heyunqiang 
 * @Date: 2020-05-09 22:53:39 
 * @Last Modified by: yunqinagHe
 * @Last Modified time: 2020-05-10 23:59:29
 */


window.onload = function() {
    gantt.init("gantt_here");
    gantt.parse({
        data: [{
            id: 1,
            text: "Project #2",
            start_date: "01-04-2018",
            duration: 18,
            progress: 0.4,
            open: true
        }, {
            id: 2,
            text: "Task #1",
            start_date: "02-04-2018",
            duration: 8,
            progress: 0.6,
            parent: 1
        }, {
            id: 3,
            text: "Task #2",
            start_date: "11-04-2018",
            duration: 8,
            progress: 0.6,
            parent: 1
        }],
        links: [{
            id: 1,
            source: 1,
            target: 2,
            type: "1"
        }, {
            id: 2,
            source: 2,
            target: 3,
            type: "0"
        }]
    });

    // let temp = [
    //     { source: 1, target: 2 },
    //     { source: 1, target: 3 }
    // ];

    // for (let i = 0; i < temp.length; i++) {
    //     jsPlumb.connect({
    //         source: $(".gantt_task_row[task_id=" + temp[i].source + "]")[0],
    //         target: $(".gantt_task_row[task_id=" + temp[i].target + "]")[0],
    //         endpoint: 'Dot'
    //     });
    // }

    jsPlumb.connect({
        source: $(".gantt_task_row[task_id=1]")[0],
        target: $(".gantt_task_row[task_id=2]")[0],
        endpoint: 'Rectangle',
        connector: ['Flowchart'],
        overlays: [
            ['Arrow', {
                width: 10,
                length: 10,
                location: 1
            }],
            ['Label', {
                label: '<button class="delete-node-btn">X</button>',
                cssClass: '',
                labelStyle: {
                    color: 'red'
                },
                events: {
                    click: function(labelOverlay, originalEvent) {
                        console.log('click on label overlay for :' + labelOverlay.component)
                        console.log(labelOverlay)
                        console.log(originalEvent)
                    }
                }
            }]
        ]
    });

    $("#del").click(function() {
        console.log("jsPlumb.deleteEveryConnection()");
        jsPlumb.deleteEveryConnection()
    })

}