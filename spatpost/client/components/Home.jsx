Home = React.createClass({

    render: function() {

        return (
        	<div className="wrap">
        		<section id="hero" className="m-center text-center bg-shop full-height" style={{height:'596px'}}>
        			<div className="center-box">
        				<div className="container-fluid">
        					<div className="row">
        						<div className="col-sm-12">
        							<div className="hero-unit">
        								<h1 className="title">Oost A Apatula</h1>
        								<h3>Send Something Different</h3>
        								<p>100% Fun, 100% Anonymous</p>
        								<br/>
        								<a href="" className="btn white">
        									<b>£7</b> BUY NOW
        								</a>
        							</div>
        						</div>
        						<div className="col-sm-12 img-hero"></div>
        					</div>
        				</div>
        				<a href="#start" className="hero-start-link smooth-scroll anchor-link">
        					<i className="glyphicon glyphicon-chevron-down"></i>
        				</a>
        			</div>
        		</section>
        		<section id="start" className="padding-top-bottom text-center">
        			<div className="container">
        				<div className="row header">
        					<div className="col-md-12">
        						<h2>About Oost A Apatula</h2>
        						<p>What is this about?</p>
        					</div>
        				</div>
        				<div className="row">
        					<div className="col-md-8 col-md-offset-2">
        						This site will will help you to send something simple but memorable.
        						Start today, Send a Spatula.
        					</div>
        				</div>
        			</div>
        		</section>
        		<section id="showcase">
        			<div className="container-fluid">
        				<div className="row">
        					<div className="col-sm-6 slider">
        						<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        							{/* Indicators */}
        								<ol className="carousel-indicators">
								    		<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
								    		<li data-target="#carousel-example-generic" data-slide-to="1"></li>
								    		<li data-target="#carousel-example-generic" data-slide-to="2"></li>
								  		</ol>
								  	{/* Wrapper for slides */}
								  	<div className="carousel-inner" role="listbox">
								  		<div id="cupone" className="item active">
      										<img src="http://placekitten.com/800/500" alt="cup1"/>
      										<div className="carousel-caption">
        										Normal
      										</div>
    									</div>
    									<div className="item">
      										<img src="http://www.placecage.com/800/500" alt="cup2"/>
      										<div className="carousel-caption">
        										Yellow
      										</div>
    									</div>
    									<div className="item">
      										<img src="http://fillmurray.com/800/500" alt="cup3"/>
      										<div className="carousel-caption">
        										Purple
      										</div>
    									</div>
								  	</div>
								  	{/* Controls */}
								  	<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
								  		<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								  		<span className="sr-only">Previous</span>
								  	</a>
								  	<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
								  		<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								  		<span className="sr-only">Next</span>
								  	</a>
								</div>
        					</div>
        					<div className="col-sm-6 bg-shop" style={{height:'500px'}}>
        						<div className="half-box-right">
        							<div className="center-vertical">
        								<div className="center-vertical-box">
        									<h1>
        										<b>See What's Included</b>
        									</h1>
        									<ul style={{padding:'20px'}}>
        										<li>one</li>
        										<li>two</li>
        										<li>three</li>
        										<li>four</li>
        										<li>five</li>
        									</ul>
        									<a href="#" className="btn dark">
        										<b>£7</b> BUY NOW.
        									</a>
        								</div>
        							</div>
        						</div>
        					</div>
        				</div>
        			</div>
        		</section>
        		<section id="contact" className="padding-top-bottom">
        			<div className="container">
		                <div className="row header">
		                    <div className="col-md-12">
		                        <h2>Contact me</h2>
		                        <p>For any questions fill in the form below &amp; we'll get back to you ASAP!</p>
		                    </div>
		                </div>
		                <div className="row">
		                    <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 contact-info">
		                        <form id="contact-form" action="sendemail.php" className="myform" method="post" novalidate="">
		                            <div className="row clearfix">
		                                <div className="col-xs-12 col-sm-6 col-md-6">
		                                    <div className="form-group">
		                                        <label className="control-label">Name</label>
		                                        <div className="controls">
		                                            <input name="contactName" placeholder="Your name" className="form-control input-lg requiredField" data-error-empty="Enter name" type="text" />
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="col-xs-12 col-sm-6 col-md-6">
		                                    <div className="form-group">
		                                        <label className="control-label" for="contact-mail">Email</label>
		                                        <div className=" controls">
		                                            <input name="email" placeholder="Your email" className="form-control input-lg requiredField" data-error-invalid="Invalid email address" data-error-empty="Enter email" type="email" />
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="form-group">
		                                <label className="control-label" for="contact-message">Message</label>
		                                <div className="controls">
		                                    <textarea name="comments" placeholder="Your message" className="form-control input-lg requiredField" rows="5" data-error-empty="Enter message"></textarea>
		                                </div>
		                            </div>
		                            <p>
		                                <button name="submit" type="submit" className="btn btn-store btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Email Sent">Send Message</button>
		                            </p>
		                            <input name="submitted" id="submitted3" value="true" type="hidden"/>
		                        </form>
		                    </div>
		                </div>
		            </div>
        		</section>        
        	</div>
            );
    }

});