import React, { useState } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { Button, Card } from 'react-bootstrap';

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('# Hello World\n## How are you \n[This is a link](https://www.example.com) \n\n``````\nThis is a code block\n``````\n\n- Item 1\n- Item 2\n\n![My image](https://picsum.photos/id/237/200/300)\n\nYou can also make text **bold**... whoa!')
    return (
        <div>
            <Card className='shadow'>
                <Card.Header>Editor</Card.Header>
                <Card.Body>
                    <textarea 
                    id='editor'
                    value={markdown} 
                    onChange={(e) => setMarkdown(e.target.value)}
                    style={{width: '600px', height:'200px', backgroundColor: 'transparent'}}
                    />
                </Card.Body>
            </Card>

            <Card className='shadow mt-3' >
                <Card.Header>Previewer</Card.Header>
                <Card.Body>
                    <MarkdownPreview 
                    id='preview'
                    style={{width: '100%', height:'200px', backgroundColor: 'transparent', overflow: 'auto'}} source={markdown} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default MarkdownPreviewer