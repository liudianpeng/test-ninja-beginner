package models.utils.Spider;

import org.apache.commons.httpclient.HttpException;
import org.htmlparser.util.ParserException;

import java.io.IOException;

/**
 * Created by Peng on 2016/8/5.
 */
public class SpiderRun {

    /**
     * @param args
     */
    public static void main(String[] args) {
// TODO Auto-generated method stub
        String[] seeds={"http://localhost/openzone/"};//爬虫首先进入的网页
        String line="http://localhost";//爬虫只记录以此开头的地址
        String savepath="D:\\javaworkspace\\openzone";//保存网页的文件夹地址
        String encoding="utf-8";//设置编码
        Spider spider=new Spider(seeds, line, savepath, encoding);
        try {
            spider.run();
        } catch (HttpException e) {
            e.printStackTrace();
            // TODO Auto-generated catch block
        } catch (ParserException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }


}
