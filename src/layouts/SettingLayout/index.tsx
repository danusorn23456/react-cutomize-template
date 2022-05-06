import styled from "@emotion/styled"
import { Card, Col, Row } from "antd"
import { ReactElement } from "react"

export interface SettingLayoutProps {
	children: ReactElement
}

const StyledRow = styled(Row)(({ theme }) => ({
	height: "100%",
	".ant-col, .ant-row, .ant-card": {
		height: "100%",
	},
	".ant-card": {
		overflow: "auto"
	}
}))

export default function SettingLayout({ children, ...props }: SettingLayoutProps) {
	return (
		<StyledRow justify="center">
			<Col xs={24} md={20}>
				<Row>
					<Col xs={6}>
						<Card>
						</Card>
					</Col>
					<Col xs={18}>
						<Card>
							{children}
						</Card>
					</Col>
				</Row>
			</Col>
		</StyledRow>
	)
}