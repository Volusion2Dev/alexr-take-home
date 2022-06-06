import { Button } from '@blueprintjs/core'
import React from 'react'
import styled from 'styled-components'

const StyledPreviewButton = styled(Button)`
  background-color: #9fb3c8 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #102a43 !important;
  font-weight: bold;
  margin: 5px auto;
  padding: 10px;
  text-transform: capitalize;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  z-index: 1;
`
// TODO - Improve CSS on Button, maybe use a blueprint icon that looks suitable for a Preview button.
// Specific Improvements - Round Edges, match the styling to be more aligned with existing sidebar button styles.
// Low Priority do to needed effort and lack of time -=> Have the button enlarge and expand from the corner so it takes up less space when not wanting to be immediately pressed.

interface PreviewProps {
  togglePreview: () => void
}

const Preview: React.FunctionComponent<PreviewProps> = ({ togglePreview }) => {
  return (
    <StyledPreviewButton onClick={() => togglePreview()}>
      Preview
    </StyledPreviewButton>
  )
}

export default Preview
