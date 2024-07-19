import React, { useState } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview';
import { Button, Card } from 'react-bootstrap';

const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = useState('# Hello World\n\nThis is a markdown preview.')
    return (
        <div>
            <Card >
                <Card.Header>Editor</Card.Header>
                <Card.Body>
                    <Card.Title>Markdown Previewer</Card.Title>
                </Card.Body>
            </Card>

            <Card >
                <Card.Header>Markdown Previewer</Card.Header>
                <Card.Body>
                    <Card.Title>Markdown Previewer</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MarkdownPreviewer