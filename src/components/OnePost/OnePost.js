import React, {Component} from 'react';

class OnePost extends Component {
    render() {

        let {item, onSelectPost} = this.props;
        return (
            <div>
                {item.id} - {item.title} -

                <button onClick={() => onSelectPost(item.id)}>chose</button>
            </div>
        );
    }
}

export default OnePost;