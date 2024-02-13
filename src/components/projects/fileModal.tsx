import React from 'react'
import { Modal, Portal } from '@mantine/core'
import { grabFile } from '@/lib/sanity-client'

const FileModal = ({document, opened, close, title} : {document: object, opened: boolean, close: VoidFunction, title: string}) => {
  return (
    <Portal>
        <Modal opened={opened} onClose={close} title={title} centered size="80%">
            <div style={{width: '100%', height: '80vh'}}>
                <iframe src={grabFile(document)} width="100%" height="100%" />
            </div>
        </Modal>
    </Portal>
  )
}

export default FileModal