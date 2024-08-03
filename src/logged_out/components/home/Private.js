import React from "react";
import PropTypes from "prop-types";

function PrivacyPolicy(props) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>隐私政策</h1>
      <p>
        <strong>生效日期： 2024-08-01</strong>
      </p>

      <h2>引言</h2>
      <p>
        感谢您使用我们的 Chrome
        扩展CleanTracks（以下简称“扩展”）。我们重视您的隐私和数据安全，并希望通过此隐私政策向您说明我们如何处理您的个人信息。本隐私政策适用于所有使用此扩展的用户。
      </p>

      <h2>1. 我们收集的信息</h2>
      <p>在您使用我们的扩展时，我们可能会收集以下信息：</p>
      <ul>
        <li>
          <strong>用户名和密码</strong>
          ：用于验证您的身份并允许您登录我们的服务。
        </li>
        <li>
          <strong>浏览历史</strong>：用于提供扩展的核心功能。
        </li>
        <li>
          <strong>Cookies</strong>：用于提供扩展的核心功能。
        </li>
        <li>
          <strong>表单数据（Formdata）</strong>：用于提供扩展的核心功能。
        </li>
        <li>
          <strong>浏览器存储</strong>：用于提供扩展的核心功能。
        </li>
        <li>
          <strong>下载记录</strong>：用于提供扩展的核心功能。
        </li>
        <li>
          <strong>浏览器缓存</strong>：用于提供扩展的核心功能。
        </li>
      </ul>

      <h2>2. 信息的使用</h2>
      <p>我们收集的上述信息仅用于以下目的：</p>
      <ul>
        <li>提供和改进扩展的功能。</li>
        <li>验证您的身份并确保安全登录。</li>
        <li>提高用户体验和扩展性能。</li>
        <li>确保扩展的正常运行和维护。</li>
      </ul>

      <h2>3. 信息的存储和共享</h2>
      <p>
        我们对您的信息进行严格保护，确保其仅存储在您的浏览器或我们的服务器中，并不会与任何第三方共享。您的浏览历史、cookie、表单数据、浏览器存储、下载记录和浏览器缓存将仅保存在您的设备上。
      </p>

      <h2>4. 安全措施</h2>
      <p>
        我们采取了适当的技术和组织措施，以保护您的信息免受未经授权的访问、使用或披露。这些措施包括但不限于数据加密和严格的访问控制。
      </p>

      <h2>5. 用户的权利</h2>
      <p>
        您有权随时访问、修改或删除存储在浏览器中的个人信息。您可以通过以下方式行使这些权利：
      </p>
      <ul>
        <li>
          <strong>访问和修改</strong>：通过扩展的设置页面查看和修改存储的信息。
        </li>
        <li>
          <strong>删除</strong>
          ：通过浏览器的设置清除缓存和存储数据，或者卸载扩展。
        </li>
      </ul>

      <h2>6. 儿童隐私</h2>
      <p>
        我们的扩展不面向 13 岁以下的儿童。我们不会故意收集或存储 13
        岁以下儿童的个人信息。如果我们发现无意中收集了此类信息，我们将采取措施尽快删除。
      </p>

      <h2>7. 隐私政策的变更</h2>
      <p>
        我们可能会不时更新此隐私政策。任何更改将在本页面上公布，并在生效日期后适用。我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。
      </p>

      <h2>8. 联系我们</h2>
      <p>
        如果您对本隐私政策有任何疑问或需要进一步的信息，请通过以下方式联系我们：
      </p>
      <p>
        电子邮件：jianshao_@hotmail.com
      </p>
      <p>感谢您使用我们的扩展。我们承诺将持续保护您的隐私和个人信息。</p>
    </div>
  );
}

PrivacyPolicy.protoTypes = {
  openRegisterDialog: PropTypes.func.isRequired,
};

export default PrivacyPolicy;
