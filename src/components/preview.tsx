import { Button } from "@blueprintjs/core"
import React from "react"
import styled from "styled-components"

const StyledPreviewButton = styled(Button)`
  background-color: #9fb3c8 !important;
  background-image: none !important;
  box-shadow: none !important;
  color: #102a43 !important;
  font-weight: bold;
  margin: 5px auto;
  padding: 10px;
  text-transform: capitalize;
  width: 80%;
`

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
