import React from 'react';
import { Collapse } from 'react-bootstrap';

function ContentData({ isCollapsed }, props) {
    console.log(props);
    return (
        <Collapse in={isCollapsed}>
            <div>
                {/* Contenu du collapse */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </Collapse>
    );
}

export default ContentData;