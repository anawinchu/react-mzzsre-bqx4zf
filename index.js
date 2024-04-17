import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect } from 'react';

import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, ContextMenu } from '@syncfusion/ej2-react-filemanager';
/**
 * File Manager sample with Amazon S3 file provider service
 */
const AmazonS3Provider = () => {
    let hostUrl = "https://amazons3.azurewebsites.net/api/AmazonS3Provider/";
    return (<div>
            <div className="control-section">
                <FileManagerComponent id="filemanager" ajaxSettings={{ url: hostUrl + 'AmazonS3FileOperations', getImageUrl: hostUrl + 'AmazonS3GetImage', uploadUrl: hostUrl + 'AmazonS3Upload', downloadUrl: hostUrl + 'AmazonS3Download' }} searchSettings={{ allowSearchOnTyping: false }} toolbarSettings={{ items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details'] }} contextMenuSettings={{ layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll'] }}>
                    <Inject services={[NavigationPane, DetailsView, Toolbar, ContextMenu]}/>
                </FileManagerComponent>
            </div>
        </div>);
};
export default AmazonS3Provider;

const root = createRoot(document.getElementById('sample'));
root.render(<AmazonS3Provider />);