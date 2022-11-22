# What happens when user type URL in the browser ?

## websites, servers, IP addresses
Websites are collections of files, often HTML, CSS, Javascript, and images, that tell or browser how to display the site, images, and data. A powerful external computer connected to the Internet, called a server, stores these files.

When we point our browser at a URL like https://facebook.com/login, our browser has to figure out which server on the Internet is hosting the site. It does this by looking up the domain, facebook.com, to find the address.

Each device on the Internet — servers, cell phones, your smart refrigerator — all have a unique address called an IP address. An IP address contains four numbered parts:

- 203.0.113.0

But numbers like this are hard to remember! That’s where domain names come in. facebook.com is much easier to remember than 203.0.113.0.

We do the same on the Internet. The domain name system, or DNS, is like the Contacts app on our phone. DNS helps our browser (and us) find servers on the Internet. We can do a DNS lookup to find the IP address of the server based on the domain name, facebook.com.

![InkedURL and DNS_LI](https://user-images.githubusercontent.com/25152105/175202752-4efb5a64-ba3e-495d-991e-74e3356292b0.jpg)


)


## The process

**1. User types https://example.com/products/electric/phone in browser and press Enter**  

![overview custom diagram](https://user-images.githubusercontent.com/25152105/175203875-e8a2cf56-6c7f-46e6-8530-4acdc73d2bfa.jpg)

Let’s break down the parts of this URL you typed in to get here.

https://example.com/products/electric/phone

![URL explanation](https://user-images.githubusercontent.com/25152105/175207245-90190235-2f39-46cb-8f54-d55e1bb0e2dc.jpg)


**Scheme**

https:// is the scheme. HTTPS stands for Hypertext Transfer Protocol Secure. This scheme tells the browser to make a connection to the server using Transport Layer Security, or TLS. TLS is an encryption protocol to secure communications over the Internet. With HTTPS, the data exchanged between your browser and the server, like passwords or credit card info, is encrypted.

**Domain**

example.com is the domain name of the site. It is the memorable address and points to a specific server’s IP address.

**Path**

Sometimes there is an additional path to the resource in the URL. For example, for this URL,https://example.com/products/electric/phone, products/electric is the path on the server to the requested resource, phone. You can think of this like the directory structure of files and other directories on your computer. It’s a way to organize your resources, whether they are static HTML, CSS, Javascript, or image files, or dynamically generated content. Common examples of paths are blog, posts, tags, or images, each grouping different resources.

**Resource**

When we typed this URL into your browser, phone is the name of the resource on the website you want to view. Sometimes we’ll see this with a file extension like .html which indicates this is a static file on the server with HTML content. Without an extension, like this URL, it usually indicates the server generated this content. For instance, a news site would show you customized, up to date, and local news content, which it can only do when it knows who you are or where the request came from.

**2. Browser looks up IP address for the domain**

After we've typed the URL into our browser and pressed enter, the browser needs to figure out which server on the Internet to connect to. To do that, it needs to look up the IP address of the server hosting the website using the domain we typed in. It does this using a DNS lookup.

Because DNS is complex and has to be blazingly fast, DNS data is cached at different layers between our browser and at various places across the Internet. Our browser checks its own cache, the operating system cache, a local network cache at our router, and a DNS server cache on your corporate network or at your internet service provider (ISP). If the browser cannot find the IP address at any of those cache layers, the DNS server on your corporate network or at your ISP does a recursive DNS lookup. A recursive DNS lookup asks multiple DNS servers around the Internet, which in turn ask more DNS servers for the DNS record until it is found.

Once the browser gets the DNS record with the IP address, it’s time for it to find the server on the Internet and establish a connection.

**3. Browser initiates TCP connection with the server**

Using the public Internet routing infrastructure, packets from a client browser request get routed through the router, the ISP, through an internet exchange to switch ISPs or networks, all using transmission control protocol, more commonly known as TCP, to find the server with the IP address to connect to.

Once the browser finds the server on the Internet, it establishes a TCP connection with the server and if HTTPS is being used, a TLS handshake takes place to secure the communication

Once the browser has established a connection with the server, the next step is to send the HTTP request to get the resource, or the page.

**4. Browser sends the HTTP request to the server**

Now that the browser has a connection to the server, it follows the rules of communication for the HTTP(s) protocol. It starts with the browser sending an HTTP request to the server to request the contents of the page. The HTTP request contains a request line, headers (or metadata about the request), and a body. The request line contains information that the server can use to determine what the client (in this case, your browser) wants to do.

The request line contains the following:

- a request method, which is one of GET, POST, PUT, PATCH, DELETE, or a handful of other HTTP verbs
- the path, pointing to the requested resources
- the HTTP version to communicate with

The request line for the URL request looks like this:

```
GET /phone HTTP/1.1
```
The request line tells the server that you want to GET resource at /phone and to communicate with HTTP/1.1.

The next part of the request is the request headers. Headers pass extra information along from the client that help route the request, indicate what type of client is making the request (the user agent), and can be used for supporting A/B testing, blue/green deployments, and canary deployments.
Headers are key-value pairs like this:
```
Host: example.com
User-Agent: curl/7.64.1
Accept: */*
```
The last part of the request is the body. The body is (usually) empty for a GET request like ours. For a request that manipulates resources, like POST, PUT, or PATCH, the body will contain the data from the client to create or update.

The request body can be in different formats and the server understands the format based on a request header, Content-Type.

Here’s an example of the full request for the URL, with the request line and headers (no body since this is a GET):
```
GET /phone/ HTTP/1.1
Host: example.com
Connection: keep-alive
Pragma: no-cache
Cache-Control: no-cache
sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"
sec-ch-ua-mobile: ?0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: <https://example.com/>
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
dnt: 1
sec-gpc: 1
```

Once the server has received the request from the client, the server processes it and sends back a response.

**5. Server processes request and sends back a response**

The server takes the request and based on the info in the request line, headers, and body, decides how to process the request. For the request, GET /phone/ HTTP/1.1, the server gets the content at this path, constructs the response and sends it back to the client. The response contains the following:

- a status line, telling the client the status of the request
- response headers, telling the browser how to handle the response
- the requested resource at that path, either content like HTML, CSS, Javascript, or image files, or data

The status line contains both the HTTP version and a numeric and text representation of the status of the request. The response looks like this:

```
HTTP/1.1 200 OK
Date: Tue, 25 May 2021 19:40:59 GMT
Server: Apache
X-Frame-Options: SAMEORIGIN
X-Powered-By: Express
Cache-Control: max-age=0, no-cache
Content-Type: text/html; charset=utf-8
Vary: Accept-Encoding
X-Mod-Pagespeed: 1.13.35.2-0
Content-Encoding: br
Keep-Alive: timeout=1, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked

<!DOCTYPE html>
<html lang="en">
<head>
    THE REST OF THE HTML
```
The browser considers a status code in the 200s to be successful. The response was 200, so the browser knows to render the response.

**6. Browser renders the content**

Once the browser has received the response from the server, it inspects the response headers for information on how to render the resource. The Content-Type header above tells the browser it received an HTML resource in the response body.

The first GET request returns HTML, the structure of the page. But if we inspect the HTML of the page (or any web page) with our browser’s dev tools, we’ll see it references other Javascript, CSS, image resources and requests additional data in order to render the web page as designed.

As the browser is parsing and rendering the HTML, it is making additional requests to get Javascript, CSS, images, and data.
