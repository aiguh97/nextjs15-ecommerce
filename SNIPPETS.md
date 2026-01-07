# Email Templates

<details>
    <summary><code>emailVerificationLink.js</code></summary>

```js
export const emailVerificationLink = (link) => {
  const html = `
<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;

        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }

        .image_block img+div {
            display: none;
        }

        sup,
        sub {
            font-size: 75%;
            line-height: 0;
        }

        @media (max-width:520px) {
            .desktop_hide table.icons-inner {
                display: inline-block !important;
            }

            .icons-inner {
                text-align: center;
            }

            .icons-inner td {
                margin: 0 auto;
            }

            .mobile_hide {
                display: none;
            }

            .row-content {
                width: 100% !important;
            }

            .stack .column {
                width: 100%;
                display: block;
            }

            .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
                display: table !important;
                max-height: none !important;
            }
        }
    </style>
</head>

<body class="body"
    style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
        <tbody>
            <tr>
                <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                        role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5; padding:50px 0;"
                        width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <table align="center" border="0" cellpadding="0" cellspacing="0"
                                        class="row-content stack" role="presentation"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px; margin: 0 auto;"
                                        width="500">
                                        <tbody>
                                            <tr>
                                                <td class="column column-1"
                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                    width="100%">
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="image_block block-1" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:5px;padding-left:5px;padding-right:5px;width:100%;">
                                                                <div align="center" class="alignment"
                                                                    style="line-height:10px">
                                                                    <div style="max-width: 250px;"><img
                                                                            alt="reset-password" height="auto"
                                                                            src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1737487850/next-ecommerce/rb_27348_hfzgxd.png"
                                                                            style="display: block; height: auto; border: 0; width: 100%;"
                                                                            title="reset-password" width="250" /></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="heading_block block-2" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad" style="text-align:center;width:100%;">
                                                                <h1
                                                                    style="margin: 0; color: #393d47; direction: ltr; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 30px;">
                                                                    <strong>Email Verification</strong>
                                                                </h1>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="paragraph_block block-3" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#393d47;font-family:Tahoma,Verdana,Segoe,sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
                                                                    <p style="margin: 0; word-break: break-word;">We
                                                                        received a request to verify your identity. Use
                                                                        the following link to
                                                                        complete the verification process:</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="heading_block block-4" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <h4
                                                                    style="margin: 0; color: #7747FF; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 20px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;">

                                                                    <a href="${link}"
                                                                        style="background-color: #7747FF;color:white;padding:10px 30px;text-decoration: none; border-radius: 50px;">Verify</a>
                                                                </h4>
                                                                
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="10" cellspacing="0"
                                                        class="paragraph_block block-3" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad">
                                                                <div
                                                                    style="color:#393d47;font-family:Tahoma,Verdana,Segoe,sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
                                                                    <p style="margin: 0; word-break: break-word;">If the button above doesn’t work, you can copy and
                                                                        paste the following link into your browser:</p>
                                                                      
                                                                        <a href="${link}">${link}</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        class="paragraph_block block-5" role="presentation"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                        width="100%">
                                                        <tr>
                                                            <td class="pad"
                                                                style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                <div
                                                                    style="color:#393d47;font-family:Tahoma,Verdana,Segoe,sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
                                                                    <p style="margin: 10px;"><strong>Note:</strong> This link will expire in 1 hours. If you did not create an account, you can safely ignore this email.</p>
                                                                         
                                                                    <p style="margin: 0;">Thank you,<br />
                                                                        <a href="https://www.youtube.com/@developergoswami"
                                                                            target="_blank">Developer
                                                                            Goswami</a>
                                                                    </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>

      `;

  return html;
};
```

</details>

<details>
    <summary><code>orderNotification.js</code></summary>

```js
export const orderNotification = (data) => {
  const html = `
        <!DOCTYPE html>
  <html lang="en-US" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		.row-4 .column-1 .block-3 .button:hover {
			background-color: #000000 !important;
			border-bottom: 0 solid transparent !important;
			border-left: 0 solid transparent !important;
			border-right: 0px solid transparent !important;
			border-top: 0 solid transparent !important;
			color: #ffffff !important;
		}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.row-5 .column-2 .block-1.social_block .alignment table,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-3 .column-1 .block-2.paragraph_block td.pad>div,
			.row-3 .column-3 .block-1.paragraph_block td.pad>div {
				font-size: 10px !important;
			}

			.row-3 .column-1 .block-2.paragraph_block td.pad {
				padding: 10px !important;
			}

			.row-3 .column-2 .block-1.divider_block td.pad,
			.row-3 .column-4 .block-1.divider_block td.pad {
				padding: 30px 10px 10px !important;
			}

			.row-3 .column-2 .block-1.divider_block .alignment table,
			.row-3 .column-4 .block-1.divider_block .alignment table {
				display: inline-table;
			}

			.row-2 .column-1 .block-1.heading_block h1 {
				font-size: 30px !important;
			}

			.row-3 .column-3 .block-1.paragraph_block td.pad,
			.row-3 .column-5 .block-1.paragraph_block td.pad {
				padding: 25px 0 0 !important;
			}

			.row-3 .column-5 .block-1.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 10px !important;
			}

			.row-5 .column-1 .block-1.paragraph_block td.pad>div {
				text-align: center !important;
				font-size: 11px !important;
			}

			.row-5 .column-2 .block-1.social_block .alignment {
				text-align: center !important;
			}

			.row-7 .column-1 .block-1.paragraph_block td.pad>div,
			.row-7 .column-2 .block-1.paragraph_block td.pad>div,
			.row-7 .column-3 .block-1.paragraph_block td.pad>div {
				font-size: 11px !important;
			}

			.row-2 .row-content {
				padding: 30px !important;
			}

			.row-4 .row-content {
				padding: 0 30px 30px !important;
			}

			.row-5 .row-content {
				padding: 20px !important;
			}

			.row-6 .row-content {
				padding: 5px 30px !important;
			}

			.row-3 .column-1 {
				padding: 10px 0 5px 5px !important;
			}

			.row-3 .column-5 {
				padding: 5px 10px 5px 0 !important;
			}

			.row-5 .column-2 {
				padding: 20px 0 0 !important;
			}
		}
	</style>

</head>

<body class="body"
	style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7f1ed; border-radius: 0 0 20px 20px; color: #000000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" class="alignment">
																	<div style="max-width: 248px;"><img alt="Logo"
																			height="auto" src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1746551738/next-ecommerce/logo-black_bxt60d.png"
																			style="display: block; height: auto; border: 0; width: 100%;"
																			title="Logo" width="248" /></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; padding: 30px 60px 20px; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;"
													width="100%">
													<table border="0" cellpadding="10" cellspacing="0"
														class="heading_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<h1
																	style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 40px; font-weight: 400; letter-spacing: -2px; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 48px;">
																	<span class="tinyMce-placeholder"
																		style="word-break: break-word;">YOUR ORDER WILL
																		BE SHIPPED SOON!</span>
																</h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 45px; padding-top: 10px; vertical-align: top;"
													width="25%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" class="alignment">
																	<div style="max-width: 13px;"><img alt="Check"
																			height="auto" src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1746551738/next-ecommerce/check-orange_g480te.png"
																			style="display: block; height: auto; border: 0; width: 100%;"
																			title="Check" width="13" /></div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad" style="padding-top:10px;">
																<div
																	style="color:#000000;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:18px;font-weight:700;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0;">Confirmed</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;"
													width="16.666666666666668%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="divider_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:35px;">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 2px solid #e1cabf;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;"
													width="16.666666666666668%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad" style="padding-top:25px;">
																<div
																	style="color:#e1cabf;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:22px;">
																	<p style="margin: 0;">Shipped</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-4"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;"
													width="16.666666666666668%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="divider_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:35px;">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 2px solid #e1cabf;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-5"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 10px; padding-top: 5px; vertical-align: top;"
													width="25%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad" style="padding-left:10px;padding-top:25px;">
																<div
																	style="color:#e1cabf;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0;">Delivered</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; padding-bottom: 60px; padding-left: 60px; padding-right: 60px; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;"
													width="100%">
													<table border="0" cellpadding="40" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<div align="center" class="alignment">
																	<div style="max-width: 130px;"><img
																			alt="a hand with a star" height="auto"
																			src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1746551738/next-ecommerce/order-conf-icon_ljhxtd.png"
																			style="display: block; height: auto; border: 0; width: 100%;"
																			title="a hand with a star" width="130" />
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:35px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;width:100%;">
																<h3
																	style="margin: 0; color: #4400ff; direction: ltr; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 24px; font-weight: 700; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 29px;">
																	<span class="tinyMce-placeholder"
																		style="word-break: break-word;">Order Id:
																		${data.order_id} </span>
																</h3>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="button_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="text-align:center;">
																<div align="center" class="alignment"><a
																		href="${data.orderDetailsUrl}"
																		style="color:#ffffff;text-decoration:none;"
																		target="_blank"> <span class="button"
																			style="background-color: #9502f5; border-bottom: 0px solid #f65c03; border-left: 0px solid #f65c03; border-radius: 30px; border-right: 0px solid #f65c03; border-top: 0px solid #f65c03; color: #ffffff; display: inline-block; font-family: TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif; font-size: 16px; font-weight: 700; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 30px; padding-right: 30px; text-align: center; width: auto; word-break: keep-all; letter-spacing: 1px;"><span
																				style="word-break: break-word; line-height: 32px;">VIEW
																				MY
																				ORDER</span></span> </a>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; border-radius: 20px 20px 0 0; color: #000000; padding-bottom: 20px; padding-left: 60px; padding-top: 20px; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 20px; vertical-align: top;"
													width="58.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
																<div
																	style="color:#f7f1ed;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:14px;font-weight:700;letter-spacing:3px;line-height:1.2;text-align:left;mso-line-height-alt:17px;">
																	<p style="margin: 0;">FUEL FOR YOUR INNER GLOW</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-right: 50px; padding-top: 20px; vertical-align: top;"
													width="41.666666666666664%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="social_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="text-align:right;padding-right:0px;padding-left:0px;">
																<div align="right" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		class="social-table" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		width="108px">
																		<tr>
																			<td style="padding:0 0 0 4px;"><a
																					href="https://www.facebook.com/"
																					target="_blank"><img alt="facebook"
																						height="auto"
																						src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1746551738/next-ecommerce/facebook2x_i55n3x.png"
																						style="display: block; height: auto; border: 0;"
																						title="facebook"
																						width="32" /></a></td>
																			<td style="padding:0 0 0 4px;"><a
																					href="https://www.twitter.com/"
																					target="_blank"><img alt="twitter"
																						height="auto"
																						src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1746551738/next-ecommerce/twitter2x_mw4wta.png"
																						style="display: block; height: auto; border: 0;"
																						title="twitter"
																						width="32" /></a></td>
																			<td style="padding:0 0 0 4px;"><a
																					href="https://www.instagram.com/"
																					target="_blank"><img alt="instagram"
																						height="auto"
																						src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1746551738/next-ecommerce/instagram2x_te7lqu.png"
																						style="display: block; height: auto; border: 0;"
																						title="instagram"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; border-radius: 0; color: #000000; padding: 5px 60px; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="divider_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-top:10px;">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 1px solid #3a3a3a;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:20px;padding-top:20px;">
																<div
																	style="color:#ffffff;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:22px;">
																	<p style="margin: 0;"><strong>Have a
																			question?</strong> We love curiosity. <a
																			href="contact-us.com" rel="noopener"
																			style="text-decoration: underline; color: #ffffff;"
																			target="_blank">contact us</a></p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="divider_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:10px;padding-top:10px;">
																<div align="center" class="alignment">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 1px solid #3a3a3a;">
																				<span
																					style="word-break: break-word;"> </span>
																			</td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-top:15px;">
																<div
																	style="color:#ffffff;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:15px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:left;mso-line-height-alt:18px;">
																	<p style="margin: 0;">How much do you want to hear
																		from us?</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;"
										width="680">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-top: 5px; vertical-align: top;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:20px;padding-top:15px;">
																<div
																	style="color:#f7f1ed;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:16px;">
																	<p style="margin: 0;"><a
																			href="https://www.example.com"
																			rel="noopener"
																			style="text-decoration: underline; color: #f7f1ed;"
																			target="_blank">Give me everything!</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 20px; padding-right: 20px; padding-top: 5px; vertical-align: top;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:20px;padding-top:15px;">
																<div
																	style="color:#f7f1ed;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:16px;">
																	<p style="margin: 0;"><a
																			href="https://www.example.com"
																			rel="noopener"
																			style="text-decoration: underline; color: #f7f1ed;"
																			target="_blank">Just the essentials.</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-right: 20px; padding-top: 5px; vertical-align: top;"
													width="33.333333333333336%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:20px;padding-top:15px;">
																<div
																	style="color:#f7f1ed;direction:ltr;font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:16px;">
																	<p style="margin: 0;"><a
																			href="https://www.example.com"
																			rel="noopener"
																			style="text-decoration: underline; color: #f7f1ed;"
																			target="_blank">Unsubscribe</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>

				</td>
			</tr>
		</tbody>
	</table> 
</body>

</html>
`;

  return html;
};
```

</details>

<details>
    <summary><code>otpEmail.js</code></summary>

```js
export const otpEmail = (otp) => {
  const html = `
<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
	<title></title>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
			 
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		sup,
		sub {
			font-size: 75%;
			line-height: 0;
		}

		@media (max-width:520px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.mobile_hide {
				display: none;
			}

			.row-content {
				width: 100% !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body class="body"
	style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation"
						style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f5f5f5;padding:50px 0;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px; margin: 0 auto;"
										width="500">
										<tbody>
											<tr>
												<td class="column column-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block block-1" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:5px;padding-right:5px;width:100%;">
																<div align="center" class="alignment"
																	style="line-height:10px">
																	<div style="max-width: 250px;"><img
																			alt="reset-password" height="auto"
																			src="https://res.cloudinary.com/do7xdfl3y/image/upload/v1737487850/next-ecommerce/rb_27348_hfzgxd.png"
																			style="display: block; height: auto; border: 0; width: 100%;"
																			title="reset-password" width="250" /></div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="heading_block block-2" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1
																	style="margin: 0; color: #393d47; direction: ltr; font-family: Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 30px;">
																	<strong>Email Verification</strong>
																</h1>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="paragraph_block block-3" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad">
																<div
																	style="color:#393d47;font-family:Tahoma,Verdana,Segoe,sans-serif;font-size:14px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
																	<p style="margin: 0; word-break: break-word;">We
																		received a request to verify your identity. Use
																		the following One-Time Password (OTP) to
																		complete the verification process:</p>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="heading_block block-4" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td class="pad">
																<h1
																	style="margin: 0; color: #7747FF; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;">
																	<span class="tinyMce-placeholder"
																		style="word-break: break-word;">${otp}</span>
																</h1>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="paragraph_block block-5" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td class="pad"
																style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
																<div
																	style="color:#393d47;font-family:Tahoma,Verdana,Segoe,sans-serif;font-size:13px;line-height:150%;text-align:center;mso-line-height-alt:19.5px;">
																	<p style="margin: 0;"><strong>Note:</strong> This
																		OTP is valid for 10 minutes. Do not share it
																		with anyone.</p>
																	<p style="margin: 0;">If you did not request this,
																		please ignore this message.</p>
																	<p style="margin: 0;">Thank you,<br />
                                                                     <a href="https://www.youtube.com/@developergoswami" target="_blank">Developer
																		Goswami</a>
                                                                    </p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</body>
</html>

      `;

  return html;
};
```

</details>

# lib Folder

<details>
    <summary><code>materialTheme.js</code></summary>

```js
import { createTheme } from "@mui/material";
import { Assistant } from "next/font/google";
const assistantFont = Assistant({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

export const lightTheme = createTheme({
  colorSchemes: {
    light: true,
  },
  palette: {
    mode: "light",
    common: {
      black: "#030712",
      white: "#fff",
    },
    primary: {
      main: "#8e51ff",
    },
    secondary: {
      main: "#8e51ff",
      light: "#f8fafc",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
    text: {
      primary: "#030712",
      secondary: "#6B7280",
    },
    success: {
      main: "#22c55e",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: assistantFont.style.fontFamily,
  },
  shadows: {
    0: "none",
    1: "0px 2px 1px -1px rgba(0,0,0,0.150),0px 1px 1px 0px rgba(0,0,0,0.150),0px 1px 3px 0px rgba(0,0,0,0.150)",
    2: "none",
    8: "0 5px 5px rgba(0, 0,0,0.15)",
  },
});

export const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "dark",
    common: {
      black: "#030712",
      white: "#fff",
    },
    primary: {
      main: "#8e51ff",
    },
    background: {
      paper: "#0b0a10",
      default: "#0b0a10",
    },
    text: {
      primary: "#d4d4d4",
      secondary: "#9ca3af",
    },
    action: {
      active: "#9ca3af",
    },
  },
  typography: {
    fontFamily: assistantFont.style.fontFamily,
  },
  shadows: {
    0: "none",
    1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    2: "none",
    8: "0 5px 5px rgba(0, 0,0,0.15)",
  },
});
```

</details>

<details>
    <summary><code>utils.js</code></summary>

```js
export const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing shopping experience! The website is easy to navigate, and the checkout process was seamless. The product arrived on time and was exactly as described. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "Great quality products at affordable prices. Customer service was very responsive and helped me track my order. Will definitely shop again!",
    rating: 5,
  },
  {
    name: "Ankit Singh",
    review:
      "I was impressed by the fast delivery and well-packaged items. The product quality exceeded my expectations. Looking forward to my next purchase!",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    review:
      "The product was good, but the delivery took longer than expected. Customer support was helpful, but I wish the process was faster.",
    rating: 3,
  },
  {
    name: "Rajesh Mehta",
    review:
      "Decent experience overall. The website could use some improvements in filtering products. The checkout process was smooth, though.",
    rating: 3,
  },
  {
    name: "Pooja Agarwal",
    review:
      "The product was fine, but the packaging was slightly damaged. It didn’t affect the product inside, but better packaging would be appreciated.",
    rating: 3,
  },
  {
    name: "Arjun Malhotra",
    review:
      "Not a great experience. My order got delayed by 10 days, and customer support was slow to respond. The product was okay, but I expected better service.",
    rating: 2,
  },
  {
    name: "Neha Jain",
    review:
      "The product was not as described. I requested a return, but the process was complicated. Not very happy with the service.",
    rating: 1,
  },
  {
    name: "Vikram Kapoor",
    review:
      "Received the wrong product. Customer service was not helpful, and I had to wait a long time for a replacement. Disappointed!",
    rating: 1,
  },
];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
```

</details>

# Icons

```js
// Admin Sidebar icons.
import { AiOutlineDashboard } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlinePermMedia } from "react-icons/md";
import { RiCoupon2Line } from "react-icons/ri";

// Plus icon.
import { FiPlus } from "react-icons/fi";

// Admin dashboard icons.
import { BiCategory } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";

// Star icon.
import { MdOutlineStar } from "react-icons/md";

// Quick add component icons.
import { BiCategory } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import { RiCoupon2Line } from "react-icons/ri";
import { MdOutlinePermMedia } from "react-icons/md";

// Home page icons.
import { GoArrowRight } from "react-icons/go";
import { GiReturnArrow } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";

// Circular close icon.
import { IoCloseCircleOutline } from "react-icons/io5";

// Checkout page shipping icon.
import { FaShippingFast } from "react-icons/fa";

// my-account page icons.
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";

// Product details component icons.
import { IoIosStar } from "react-icons/io";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";

// Eye icons.
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

// Search icon.
import { HiOutlineSearch } from "react-icons/hi";

// App sidebar close and arrow icon.
import { LuChevronRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

// Download icon.
import { MdOutlineFileDownload } from "react-icons/md";

// Media component icons.
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

// Menu bar icon.
import { RiMenu4Fill } from "react-icons/ri";

// User dropdown icon.
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

// Footer icons.
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// Header icons.
import { IoIosSearch } from "react-icons/io";
import { LuCircleUser } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

// Main slider icon.
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// Testimonial component icons.
import { BsChatQuote } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
```

# Material Theme Customization

```js
import { createTheme } from "@mui/material";
import { Assistant } from "next/font/google";
const assistantFont = Assistant({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

export const lightTheme = createTheme({
  colorSchemes: {
    light: true,
  },
  palette: {
    mode: "light",
    common: {
      black: "#030712",
      white: "#fff",
    },
    primary: {
      main: "#8e51ff",
    },
    secondary: {
      main: "#8e51ff",
      light: "#f8fafc",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
    },
    text: {
      primary: "#030712",
      secondary: "#6B7280",
    },
    success: {
      main: "#22c55e",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: assistantFont.style.fontFamily,
  },
  shadows: {
    0: "none",
    1: "0px 2px 1px -1px rgba(0,0,0,0.150),0px 1px 1px 0px rgba(0,0,0,0.150),0px 1px 3px 0px rgba(0,0,0,0.150)",
    2: "none",
    8: "0 5px 5px rgba(0, 0,0,0.15)",
  },
});

export const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: "dark",
    common: {
      black: "#030712",
      white: "#fff",
    },
    primary: {
      main: "#8e51ff",
    },
    background: {
      paper: "#0b0a10",
      default: "#0b0a10",
    },
    text: {
      primary: "#d4d4d4",
      secondary: "#9ca3af",
    },
    action: {
      active: "#9ca3af",
    },
  },
  typography: {
    fontFamily: assistantFont.style.fontFamily,
  },
  shadows: {
    0: "none",
    1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    2: "none",
    8: "0 5px 5px rgba(0, 0,0,0.15)",
  },
});
```



# Components 

<details>
 <summary><code>Select.jsx</code></summary>

 ```js 
'use client'
import * as React from "react";
import { useState } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronDown, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

function Select({
    options,
    selected,
    setSelected,
    placeholder = "Select options",
    isMulti = false, // Added prop to determine if multi-select is enabled
}) {
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        if (isMulti) {
            // If multi-select, toggle the option
            if (selected.includes(option.value)) {
                setSelected(selected.filter((s) => s !== option.value));
            } else {
                setSelected([...selected, option.value]);
            }
        } else {
            // If single-select, set the selected option directly (non-array value)
            setSelected(option.value);
            setOpen(false); // Close the dropdown after selection in single-select
        }
    };


    const handleRemove = (value) => {
        setSelected(selected.filter((s) => s !== value));
    };

    const handleClearAll = () => {
        setSelected(isMulti ? [] : null);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="w-full" asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between dark:bg-card"
                >
                    <div>
 
                        {Array.isArray(selected) && selected.length > 0
                            ?
                            selected.map((value) => {
                                const option = options.find((o) => o.value === value);
                                return (
                                    <Badge key={value} className="me-2">
                                        {option.label}
                                        <span onClick={(e) => { e.stopPropagation(e); handleRemove(value) }} >
                                            <XIcon className="ml-2 h-4 w-4 cursor-pointer" />
                                        </span>
                                    </Badge>
                                )
                            })
                            :
                            selected && options.find((o) => o.value === selected)?.label || placeholder
                        }

                    </div>

                    <div className="flex items-center gap-2">
                        {selected && selected.length > 0 &&
                            <span onClick={(e) => { e.stopPropagation(); handleClearAll() }}>
                                <XIcon className="h-4 w-4 shrink-0 opacity-50" />
                            </span>
                        }
                        <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="p-0">
                <Command>
                    <CommandList>
                        <CommandInput placeholder="Search options..." />
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.label}
                                    onSelect={() => handleSelect(option)}
                                >
                                    {option.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            (isMulti
                                                ? selected.includes(option.value)
                                                : selected === option.value)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

export default Select;

 ```
 </details>


 <details>
  <summary><code>Editor.jsx</code></summary>

```js 
'use client'
import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
    ClassicEditor,
    Alignment,
    Autoformat,
    AutoImage,
    Autosave,
    BalloonToolbar,
    Base64UploadAdapter,
    BlockQuote,
    Bold,
    Bookmark,
    Code,
    CodeBlock,
    Emoji,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    FullPage,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    HtmlComment,
    HtmlEmbed,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Markdown,
    MediaEmbed,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    ShowBlocks,
    SourceEditing,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextPartLanguage,
    TextTransformation,
    TodoList,
    Underline,
    WordCount
} from 'ckeditor5';
import '@/app/ckeditor5.css';
 
import { decode } from 'entities';


/**
 * Create a free account with a trial: https://portal.ckeditor.com/checkout?plan=free
 */
const LICENSE_KEY = 'GPL'; // or <YOUR_LICENSE_KEY>.

export default function Editor({ onChange, initialData }) {
    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const { editorConfig } = useMemo(() => {
        if (!isLayoutReady) {
            return {};
        }

        return {
            editorConfig: {
                toolbar: {
                    items: [
                        'sourceEditing',
                        'showBlocks',
                        'findAndReplace',
                        // 'textPartLanguage',
                        '|',
                        'heading',
                        'style',
                        '|',
                        'fontSize',
                        'fontFamily',
                        'fontColor',
                        'fontBackgroundColor',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                        'subscript',
                        'superscript',
                        'code',
                        'removeFormat',
                        '|',
                        'emoji',
                        'specialCharacters',
                        'horizontalLine',
                        'pageBreak',
                        'link',
                        'bookmark',
                        'insertImage',
                        'mediaEmbed',
                        'insertTable',
                        'highlight',
                        'blockQuote',
                        'codeBlock',
                        'htmlEmbed',
                        '|',
                        'alignment',
                        '|',
                        'bulletedList',
                        'numberedList',
                        'todoList',
                        'outdent',
                        'indent'
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    Alignment,
                    Autoformat,
                    AutoImage,
                    Autosave,
                    BalloonToolbar,
                    Base64UploadAdapter,
                    BlockQuote,
                    Bold,
                    Bookmark,
                    Code,
                    CodeBlock,
                    Emoji,
                    Essentials,
                    FindAndReplace,
                    FontBackgroundColor,
                    FontColor,
                    FontFamily,
                    FontSize,
                    FullPage,
                    GeneralHtmlSupport,
                    Heading,
                    Highlight,
                    HorizontalLine,
                    HtmlComment,
                    HtmlEmbed,
                    ImageBlock,
                    ImageCaption,
                    ImageInline,
                    ImageInsert,
                    ImageInsertViaUrl,
                    ImageResize,
                    ImageStyle,
                    ImageTextAlternative,
                    ImageToolbar,
                    ImageUpload,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    LinkImage,
                    List,
                    ListProperties,
                    Markdown,
                    MediaEmbed,
                    Mention,
                    PageBreak,
                    Paragraph,
                    PasteFromOffice,
                    RemoveFormat,
                    ShowBlocks,
                    SourceEditing,
                    SpecialCharacters,
                    SpecialCharactersArrows,
                    SpecialCharactersCurrency,
                    SpecialCharactersEssentials,
                    SpecialCharactersLatin,
                    SpecialCharactersMathematical,
                    SpecialCharactersText,
                    Strikethrough,
                    Style,
                    Subscript,
                    Superscript,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextPartLanguage,
                    TextTransformation,
                    TodoList,
                    Underline,
                    WordCount
                ],
                balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
                fontFamily: {
                    supportAllValues: true
                },
                fontSize: {
                    options: [10, 12, 14, 'default', 18, 20, 22],
                    supportAllValues: true
                },
                heading: {
                    options: [
                        {
                            model: 'paragraph',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph'
                        },
                        {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1'
                        },
                        {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2'
                        },
                        {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3'
                        },
                        {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4'
                        },
                        {
                            model: 'heading5',
                            view: 'h5',
                            title: 'Heading 5',
                            class: 'ck-heading_heading5'
                        },
                        {
                            model: 'heading6',
                            view: 'h6',
                            title: 'Heading 6',
                            class: 'ck-heading_heading6'
                        }
                    ]
                },
                htmlSupport: {
                    allow: [
                        {
                            name: /^.*$/,
                            styles: true,
                            attributes: true,
                            classes: true
                        }
                    ]
                },
                image: {
                    toolbar: [
                        'toggleImageCaption',
                        'imageTextAlternative',
                        '|',
                        'imageStyle:inline',
                        'imageStyle:wrapText',
                        'imageStyle:breakText',
                        '|',
                        'resizeImage'
                    ]
                },
                initialData: initialData && initialData != '' ? decode(initialData) : '',
                licenseKey: LICENSE_KEY,
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },
                list: {
                    properties: {
                        styles: true,
                        startIndex: true,
                        reversed: true
                    }
                },
                
                style: {
                    definitions: [
                        {
                            name: 'Article category',
                            element: 'h3',
                            classes: ['category']
                        },
                        {
                            name: 'Title',
                            element: 'h2',
                            classes: ['document-title']
                        },
                        {
                            name: 'Subtitle',
                            element: 'h3',
                            classes: ['document-subtitle']
                        },
                        {
                            name: 'Info box',
                            element: 'p',
                            classes: ['info-box']
                        },
                        {
                            name: 'Side quote',
                            element: 'blockquote',
                            classes: ['side-quote']
                        },
                        {
                            name: 'Marker',
                            element: 'span',
                            classes: ['marker']
                        },
                        {
                            name: 'Spoiler',
                            element: 'span',
                            classes: ['spoiler']
                        },
                        {
                            name: 'Code (dark)',
                            element: 'pre',
                            classes: ['fancy-code', 'fancy-code-dark']
                        },
                        {
                            name: 'Code (bright)',
                            element: 'pre',
                            classes: ['fancy-code', 'fancy-code-bright']
                        }
                    ]
                },
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                }
            }
        };
    }, [isLayoutReady]);

    return (
        <div  >
            <div ref={editorContainerRef}>
                <div ref={editorRef}>{editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} onChange={onChange} />}</div>
            </div>
        </div>
    );
}

```

 </details>

 <details>
  <summary><code>ckeditor5.css</code> </summary>

```css
/* Add this line after root declaration in ckeditor5.css file */
.dark {
	--ck-color-base-background: oklch(0.21 0.006 285.885);
	--ck-color-base-border: oklch(1 0 0 / 10%);
	--ck-color-base-text: hsl(0, 0%, 96%);
	--ck-color-button-default-hover-background: oklch(0.541 0.281 293.009);
} 
```

 </details>

<details>
 <summary><code>Search.jsx</code></summary>

```js 
"use client";
import { Input } from "@/components/ui/input";
import { WEBSITE_SHOP } from "@/routes/WebsiteRoute";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";


const Search = ({ isShow }) => {
  const router = useRouter()
  const [query, setQuery] = useState()
  const handleSearch = () => {
    router.push(`${WEBSITE_SHOP}?q=${query}`)
  }
  return (
    <div
      className={`absolute border-t transition-all left-0 py-5 md:px-32 px-5 z-10 bg-white w-full ${isShow ? "top-18" : "-top-full "
        }`}
    >
      <div className="flex justify-between items-center relative">
        <Input
          className="rounded-full md:h-12 ps-5 border-primary"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className="absolute right-3 cursor-pointer">
          <IoSearchOutline size={20} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Search;

```

</details>

 # Search 

 ```js 

import {
    ADMIN_CATEGORY_ADD,
    ADMIN_CATEGORY_SHOW,
    ADMIN_COUPON_ADD,
    ADMIN_COUPON_SHOW,
    ADMIN_CUSTOMERS_SHOW,
    ADMIN_DASHBOARD,
    ADMIN_MEDIA_SHOW,
    ADMIN_ORDER_SHOW,
    ADMIN_PRODUCT_ADD,
    ADMIN_PRODUCT_SHOW,
    ADMIN_PRODUCT_VARIANT_SHOW,
    ADMIN_REVIEW_SHOW,

} from "@/routes/AdminPanelRoute";

const searchData = [
    {
        label: "Dashboard",
        description: "View website analytics and reports",
        url: ADMIN_DASHBOARD,
        keywords: ["dashboard", "overview", "analytics", "insights"]
    },
    {
        label: "Category",
        description: "Manage product categories",
        url: ADMIN_CATEGORY_SHOW,
        keywords: ["category", "product category"]
    },
    {
        label: "Add Category",
        description: "Add new product categories",
        url: ADMIN_CATEGORY_ADD,
        keywords: ["add category", "new category"]
    },
    {
        label: "Product",
        description: "Manage all product listings",
        url: ADMIN_PRODUCT_SHOW,
        keywords: ["products", "product list"]
    },
    {
        label: "Add Product",
        description: "Add a new product to the catalog",
        url: ADMIN_PRODUCT_ADD,
        keywords: ["new product", "add product"]
    },
    {
        label: "Product Variant",
        description: "Manage all product variants",
        url: ADMIN_PRODUCT_VARIANT_SHOW,
        keywords: ["products variants", "variants"]
    },
    {
        label: "Coupon",
        description: "Manage active discount coupons",
        url: ADMIN_COUPON_SHOW,
        keywords: ["discount", "promo", "coupon"]
    },
    {
        label: "Add Coupon",
        description: "Create a new discount coupon",
        url: ADMIN_COUPON_ADD,
        keywords: ["add coupon", "new coupon", "promotion", "offers"]
    },
    {
        label: "Orders",
        description: "Manage customer orders",
        url: ADMIN_ORDER_SHOW,
        keywords: ["orders"]
    },
    {
        label: "Customers",
        description: "View and manage customer information",
        url: ADMIN_CUSTOMERS_SHOW,
        keywords: ["customers", "users"]
    },
    {
        label: "Review",
        description: "Manage customer reviews and feedback",
        url: ADMIN_REVIEW_SHOW,
        keywords: ["ratings", "feedback"]
    },

    {
        label: "Media",
        description: "Manage website media files",
        url: ADMIN_MEDIA_SHOW,
        keywords: ["images", "videos"]
    },

];

export default searchData;



 ```



 # Demo Product Generator 

 ```js 

import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

import CategoryModel from "@/models/Category.model";

import { response } from "@/lib/helperFunction";
import ProductModel from "@/models/Product.model";
import ProductVariantModel from "@/models/ProductVariant.model";
import { connectDB } from "@/lib/databaseConnection";
import MediaModel from "@/models/Media.model";
function getRandomItems(array, count = 1) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
export async function POST(req) {

    await connectDB();
    try {
        // Fetch all categories
        const categories = await CategoryModel.find();
        if (categories.length === 0) {
            return res.status(400).json({ message: "No categories found!" });
        }

        const mediaList = await MediaModel.find();
        const mediaMap = [];
        mediaList.forEach(media => {
            mediaMap.push(media._id);
        });

        const colors = ["Red", "Blue", "Green", "Black"];
        const sizes = ["S", "M", "L", "XL", "2XL"];

        let products = [];
        let variants = [];

        for (const category of categories) {


            for (let i = 0; i < 5; i++) {

                const mrp = Number(faker.commerce.price(500, 2000, 0));
                const discountPercentage = faker.number.int({ min: 10, max: 50 });
                const sellingPrice = Math.round(mrp - (mrp * discountPercentage) / 100);


                const productId = new mongoose.Types.ObjectId();
                const selectedMedia = getRandomItems(mediaMap, 4);
                const product = {
                    _id: productId,
                    name: faker.commerce.productName(),
                    slug: faker.lorem.slug(),
                    category: category._id,
                    mrp: mrp,
                    sellingPrice: sellingPrice,
                    discountPercentage: discountPercentage,
                    media: selectedMedia,
                    description: faker.commerce.productDescription(),
                    deletedAt: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };

                products.push(product);

                // Generate 20 variants (4 colors x 5 sizes)
                for (const color of colors) {
                    for (const size of sizes) {

                        const variantMedia = getRandomItems(mediaMap, 4);
                        variants.push({
                            _id: new mongoose.Types.ObjectId(),
                            product: productId,
                            color,
                            size,
                            mrp: product.mrp,
                            sellingPrice: product.sellingPrice,
                            discountPercentage: product.discountPercentage,
                            sku: `${product.slug}-${color}-${size}-${faker.number.int({ min: 1000, max: 9999 })}`,
                            stock: faker.number.int({ min: 10, max: 100 }),
                            media: variantMedia,
                            deletedAt: null,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        });
                    }
                }
            }
        }

        // Insert data into MongoDB
        await ProductModel.insertMany(products);
        await ProductVariantModel.insertMany(variants);

        return response(true, 200, 'Fake data generated successfully.')

    } catch (error) {
        return response(false, 500, error.message)

    }
}


 ```


 ## Other Page 

 
 <details>
  <summary><code>About Page</code> </summary>
 
 ```js
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
  title: 'About',
  links: [
    { label: 'About' },
  ]
}
const AboutUs = () => {
  return (
    <div>
      <WebsiteBreadcrumb props={breadcrumb} />
      <div className='lg:px-40 px-5 py-20'>
        <h1 className='text-xl font-semibold mb-3'>About Us</h1>
        <p>Welcome to E-store, your one-stop destination for quality, convenience, and innovation in online shopping.</p>
        <p>Founded with a mission to redefine the eCommerce experience, we are passionate about bringing you a carefully curated selection of products that meet your everyday needs—whether it's fashion, electronics, home essentials, beauty, or lifestyle goods. Our goal is to deliver not just products, but value, trust, and a seamless shopping journey.</p>
        <p className='mt-5'>What sets us apart is our commitment to:</p>
        <ul className='list-disc ps-10 mt-3'>
          <li> <b> Customer Satisfaction:</b> Your happiness is our priority. From browsing to checkout, we’re here to make your shopping experience effortless and enjoyable.</li>

          <li>  <b> Quality & Affordability: </b>We partner directly with trusted suppliers and brands to offer high-quality products at competitive prices.</li>

          <li> <b>  Fast & Reliable Shipping: </b>We understand the excitement of online shopping, so we work hard to ensure your orders arrive on time.</li>

          <li>  <b> Secure Shopping: </b>Your data is safe with us. Our platform uses cutting-edge encryption and payment security technologies.</li>
        </ul>

        <p className='mt-3'>As a growing brand, we believe in constantly evolving—adding new products, improving our services, and listening to what our customers want. Whether you're shopping for yourself or finding the perfect gift, we’re here to help you discover something you'll love.
        </p>
        <p className='mt-3'>
        Thank you for choosing E-store. Let’s make shopping smarter, simpler, and more enjoyable—together.
        </p>
      </div>
    </div>
  )
}

export default AboutUs

 ```
 </details>
 
 <details>
  <summary><code>Privacy Policy</code> </summary>
  
```js
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Privacy Policy',
    links: [
        { label: 'Privacy Policy' },
    ]
}

const PrivacyPolicy = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Privacy Policy</h1>
                <p>
                    At E-store, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                </p>

                <p className='mt-3'>
                    This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or make a purchase.
                </p>

                <p className='mt-5'>Information We Collect:</p>
                <ul className='list-disc ps-10 mt-3'>
                    <li><b>Personal Information:</b> Such as your name, email address, phone number, and shipping/billing addresses, provided during account registration or checkout.</li>
                    <li><b>Payment Details:</b> Collected securely through encrypted payment gateways.</li>
                    <li><b>Usage Data:</b> Including your browser type, IP address, pages visited, and time spent on the site to help us improve user experience.</li>
                </ul>

                <p className='mt-5'>How We Use Your Information:</p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>To process your orders and provide customer support.</li>
                    <li>To personalize your shopping experience and improve our services.</li>
                    <li>To send order updates, promotional offers, and newsletters (you may opt out at any time).</li>
                    <li>To ensure our website is secure and functioning properly.</li>
                </ul>

                <p className='mt-5'>
                    We do not sell, rent, or share your personal information with third parties, except when necessary to fulfill your order or comply with legal obligations.
                </p>

                <p className='mt-3'>
                    By using our website, you consent to the practices outlined in this Privacy Policy. We may update this policy from time to time, and any changes will be reflected on this page.
                </p>

                <p className='mt-3'>
                    If you have any questions or concerns regarding our Privacy Policy, please contact our support team.
                </p>

                <p className='mt-3'>
                    Thank you for trusting E-store. Your privacy is important to us.
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy

```
 </details>
 
 <details>
  <summary><code>Terms & Conditions</code> </summary>
  
```js
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Terms & Conditions',
    links: [
        { label: 'Terms & Conditions' },
    ]
}

const TermsAndConditions = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Terms & Conditions</h1>

                <p>Welcome to E-store. By accessing or using our website, you agree to be bound by the following terms and conditions. Please read them carefully.</p>

                <p className='mt-3'>If you do not agree with any part of these terms, please do not use our website.</p>

                <p className='mt-5'><b>1. Use of Our Website:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>You must be at least 18 years old or visiting under the supervision of a parent or guardian.</li>
                    <li>You agree to use our website for lawful purposes only and not for any fraudulent or harmful activity.</li>
                </ul>

                <p className='mt-5'><b>2. Product Information:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>We strive to display accurate product details, prices, and availability, but errors may occur.</li>
                    <li>We reserve the right to correct any inaccuracies and update information at any time without prior notice.</li>
                </ul>

                <p className='mt-5'><b>3. Orders & Payments:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Placing an order does not guarantee product availability. Orders may be canceled or adjusted if stock is unavailable.</li>
                    <li>All payments must be made through our secure payment gateways. We do not store card information.</li>
                </ul>

                <p className='mt-5'><b>4. Returns & Refunds:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Please refer to our Return Policy for detailed information on returns, exchanges, and refund eligibility.</li>
                </ul>

                <p className='mt-5'><b>5. Intellectual Property:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>All content on E-store, including logos, images, and text, is the property of E-store and protected by copyright laws.</li>
                    <li>You may not use, copy, or reproduce any material without our written consent.</li>
                </ul>

                <p className='mt-5'><b>6. Limitation of Liability:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>We are not liable for any damages resulting from the use or inability to use our website or products.</li>
                </ul>

                <p className='mt-5'><b>7. Changes to Terms:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>We may update these Terms & Conditions at any time. Continued use of the website implies acceptance of the new terms.</li>
                </ul>

                <p className='mt-5'>
                    If you have any questions regarding these terms, please contact our customer support team.
                </p>

                <p className='mt-3'>
                    Thank you for choosing E-store. We value your trust and are committed to delivering a secure and reliable shopping experience.
                </p>
            </div>
        </div>
    )
}

export default TermsAndConditions

```
 </details>