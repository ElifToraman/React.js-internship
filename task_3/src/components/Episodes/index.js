import React from "react";


export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            episodeIdList: props.episodeIdList,
            episodes: null
        };
    }

    getEpisodeIdList() {
        if (this.state.episodeIdList !== null) {
            return this.state.episodeIdList.map((item) => {
                return item.replace('https://rickandmortyapi.com/api/episode/', '')
            });
        } else {
            return false;
        }
    }
}    

