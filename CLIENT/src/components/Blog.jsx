import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
} from "@material-tailwind/react";

export function Blog() {
    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <div className="md:flex-row md:items-center md:justify md:gap-3 flex-col gap-3">
                    <Avatar
                        size="lg"
                        variant="circular"
                        alt="tania andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        className="border-2 border-white hover:z-10"
                    />
                    <Typography variant="h4" color="blue-gray">
                        @username
                    </Typography>
                </div>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    "we write the headline of the blog"
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <Button>view full blog</Button>
                <Typography className="font-normal">blog-upload date</Typography>
            </CardFooter>
        </Card>
    );
}

//in the image we display the company logo 
//on click of the button we show the full blog 